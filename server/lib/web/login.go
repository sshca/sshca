package web

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"

	"github.com/sshca/sshca/server/db"

	"github.com/sshca/sshca/server/lib"

	"github.com/dgrijalva/jwt-go"
)

func LoginWeb(w http.ResponseWriter, r *http.Request) {
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		http.Error(w, "Invalid Body", http.StatusBadRequest)
		log.Print("Invalid Body")
		return
	}
	var dat struct {
		Code string `json:"code"`
	}
	err = json.Unmarshal(body, &dat)
	if err != nil {
		log.Print("Failed to Unmarshal JSON")
		return
	}
	email, err := lib.GetEmail(dat.Code)
	if err != nil {
		http.Error(w, "Failed to get email", http.StatusInternalServerError)
		log.Print("Error Getting Email")
		return
	}
	var user db.User
	db.Db.First(&user, "email = ?", email)
	if user.ID == 0 {
		db.Db.First(&user)
		if user.ID != 0 {
			log.Print("Error: User Does Not Exist")
			return
		} else {
			user = db.User{Email: email, Roles: make([]*db.Role, 0)}
			db.Db.Create(&user)
		}
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"email": user.Email,
	})
	tokenString, err := token.SignedString([]byte(os.Getenv("JWT_SECRET")))
	if err != nil {
		http.Error(w, "Failed to generate token", http.StatusInternalServerError)
		log.Print("Error Creating Token")
		return
	}
	http.SetCookie(w, &http.Cookie{
		Name:     "token",
		Value:    tokenString,
		HttpOnly: true,
		MaxAge:   2 * 60 * 60,
		Path:     "/",
	})
	_, _ = fmt.Fprint(w, fmt.Sprint(user.ID))
}
