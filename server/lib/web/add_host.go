package web

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/lavalleeale/sshca/server/lib"

	"github.com/lavalleeale/sshca/server/db"
)

func Add_host(w http.ResponseWriter, r *http.Request) {
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
		Name     string `json:"name"`
		Hostname string `json:"hostname"`
	}
	err = json.Unmarshal(body, &dat)
	if err != nil {
		log.Print("Failed to Unmarshal JSON")
		return
	}
	host := db.Host{Name: dat.Name, Hostname: dat.Hostname, Subroles: make([]db.Subrole, 0)}
	db.Db.Create(&host)
	marshal, err := json.Marshal(host)
	if err != nil {
		http.Error(w, "Failed to generate response", http.StatusInternalServerError)
		log.Print("Error: Failed to Marshal JSON")
		return
	}
	fmt.Fprint(w, string(marshal))
}
