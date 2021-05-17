package web

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/lavalleeale/sshca/server/lib"

	"github.com/lavalleeale/sshca/server/db"
)

func Change_roles(w http.ResponseWriter, r *http.Request) {
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
		Roles []int `json:"roles"`
	}
	err = json.Unmarshal(body, &dat)
	if err != nil {
		log.Print("Failed to Unmarshal JSON")
		return
	}
	var changeUser db.User
	db.Db.First(&changeUser, dat.ID)
	var roles *db.Role
	db.Db.First(&roles, dat.Roles)
	changeUser.Roles = append(changeUser.Roles, roles)
	db.Db.Model(&changeUser).Update("Roles", roles)
}
