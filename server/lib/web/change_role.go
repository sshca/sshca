package web

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/sshca/sshca/server/lib"

	"github.com/sshca/sshca/server/db"
)

func Change_users(w http.ResponseWriter, r *http.Request) {
	cookie, err := r.Cookie("token")
	if err != nil {
		http.Error(w, "Failed To Get Cookie", http.StatusUnauthorized)
		log.Print("Error: Failed to get cookie")
		return
	}
	token, err := lib.Verify_jwt(cookie.Value)
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
		Users []int `json:"users"`
	}
	err = json.Unmarshal(body, &dat)
	if err != nil {
		log.Print("Failed to Unmarshal JSON")
		return
	}
	var changeRole db.Role
	db.Db.First(&changeRole, dat.ID)
	var users = make([]*db.User, 0)
	if len(dat.Users) != 0 {
		db.Db.Find(&users, dat.Users)
	}
	err = db.Db.Model(&changeRole).Association("Users").Replace(users)
	if err != nil {
		return
	}
}
