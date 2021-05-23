package roles

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/sshca/sshca/server/lib"

	"github.com/sshca/sshca/server/db"
)

func Add(w http.ResponseWriter, r *http.Request) {
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
	var dat struct {
		Name     string `json:"name"`
		SubRoles []struct {
			Username string `json:"username"`
			HostID   int    `json:"HostID"`
		} `json:"subRoles"`
	}
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		http.Error(w, "Invalid Body", http.StatusBadRequest)
		log.Print("Invalid Body")
		return
	}
	err = json.Unmarshal(body, &dat)
	if err != nil {
		log.Print("Failed to Unmarshal JSON")
		return
	}
	subRoles := make([]db.Subrole, 0)
	for i := 0; i < len(dat.SubRoles); i++ {
		subRole := db.Subrole{Username: dat.SubRoles[i].Username, HostID: uint(dat.SubRoles[i].HostID)}
		subRoles = append(subRoles, subRole)
	}
	role := db.Role{Name: fmt.Sprint(dat.Name), Users: make([]*db.User, 0), Subroles: subRoles}
	db.Db.Create(&role)
	marshal, err := json.Marshal(role)
	if err != nil {
		http.Error(w, "Failed to generate response", http.StatusInternalServerError)
		log.Print("Error: Failed to Marshal JSON")
		return
	}
	fmt.Fprint(w, string(marshal))
}
