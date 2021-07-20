package web

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/sshca/sshca/server/lib"

	"github.com/sshca/sshca/server/db"
)

func ChangeRoles(w http.ResponseWriter, r *http.Request) {
	cookie, err := r.Cookie("token")
	if err != nil {
		http.Error(w, "Failed To Get Cookie", http.StatusUnauthorized)
		log.Print("Error: Failed to get cookie")
		return
	}
	token, err := lib.VerifyJwt(cookie.Value)
	if err != nil {
		log.Print(err)
		http.Error(w, "No Token", http.StatusUnauthorized)
		return
	}
	var user db.User
	db.Db.First(&user, "email = ?", token)
	if user.ID == 0 {
		http.Error(w, "User Does Not Exist", http.StatusUnauthorized)
		log.Print("Error: User Does Not Exist")
		return
	}
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		http.Error(w, "Invalid Body", http.StatusBadRequest)
		log.Print("Invalid Body")
		return
	}
	var dat struct {
		ID    int   `json:"id"`
		Roles []int `json:"roles"`
	}
	err = json.Unmarshal(body, &dat)
	if err != nil {
		log.Print("Failed to Unmarshal JSON")
		return
	}
	var changeUser db.User
	db.Db.First(&changeUser, dat.ID)
	var roles = make([]*db.Role, 0)
	if len(dat.Roles) != 0 {
		db.Db.Find(&roles, dat.Roles)
	}
	err = db.Db.Model(&changeUser).Association("Roles").Replace(roles)
	if err != nil {
		return
	}
}
