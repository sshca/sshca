package hosts

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/sshca/sshca/server/lib"

	"github.com/sshca/sshca/server/db"
)

func Get(w http.ResponseWriter, r *http.Request) {
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
	var host db.Host
	db.Db.Preload("Subroles").First(&host, r.URL.Query().Get("id"))
	if host.ID == 0 {
		http.Error(w, "Failed to retrieve host", http.StatusInternalServerError)
		log.Print("Error: Failed to retrieve host")
		return
	}
	marshal, err := json.Marshal(host)
	if err != nil {
		http.Error(w, "Failed to generate response", http.StatusInternalServerError)
		log.Print("Error: Failed to Marshal JSON")
		return
	}
	_, _ = fmt.Fprint(w, string(marshal))
}
