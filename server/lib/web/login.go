package web

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"

	"github.com/lavalleeale/sshca/server/db"

	"github.com/lavalleeale/sshca/server/lib"

	"github.com/dgrijalva/jwt-go"
)

func Login_web(w http.ResponseWriter, r *http.Request) {
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		http.Error(w, "Invalid Body", http.StatusBadRequest)
		log.Print("Invalid Body")
		return
	}
	var dat struct {
		Code string `json:"code"`
	}
	json.Unmarshal(body, &dat)
	email, err := lib.GetEmail(dat.Code)
	if err != nil {
		http.Error(w, "Failed to get email", http.StatusInternalServerError)
		log.Print("Error Getting Email")
		return
	}
	var user db.User
	db.Db.First(&user, "email = ?", email)
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
	fmt.Fprint(w, fmt.Sprint(user.ID))
}
