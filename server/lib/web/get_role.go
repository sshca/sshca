package web

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/lavalleeale/sshca/server/lib"

	"github.com/lavalleeale/sshca/server/db"
)

func Role_web(w http.ResponseWriter, r *http.Request) {
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
	var role db.Role
	db.Db.Preload("Subroles").Preload("Users").First(&role, r.URL.Query().Get("id"))
	if role.ID == 0 {
		http.Error(w, "Failed to retrieve role", http.StatusInternalServerError)
		log.Print("Error: Failed to retrieve role")
		return
	}
	marshal, err := json.Marshal(role)
	if err != nil {
		http.Error(w, "Failed to generate response", http.StatusInternalServerError)
		log.Print("Error: Failed to Marshal JSON")
		return
	}
	fmt.Fprint(w, string(marshal))
}
