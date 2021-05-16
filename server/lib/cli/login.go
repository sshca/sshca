package cli

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/lavalleeale/sshca/server/lib"

	"github.com/lavalleeale/sshca/server/db"

	"golang.org/x/crypto/ssh"
)

func Login_cli(w http.ResponseWriter, r *http.Request) {
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		log.Print("Invalid Body")
		return
	}
	var dat struct {
		Code string `json:"code"`
		Key  string `json:"key"`
	}
	json.Unmarshal(body, &dat)
	token, err := lib.GetToken(dat.Code)
	if err != nil {
		log.Print("Error Getting Token")
		return
	}
	email, err := lib.GetEmail(token)
	if err != nil {
		log.Print("Error Getting Email")
		return
	}
	var user db.User
	db.Db.Preload("Roles").First(&user, "email = ?", email)
	publicKey, _, _, _, _ := ssh.ParseAuthorizedKey([]byte(dat.Key))
	fmt.Print(user)
	var roleList []string
	for _, x := range user.Roles {
		roleList = append(roleList, fmt.Sprintf("sshca_subrole_%v", x.ID))
	}
	signed, err := lib.Sign(
		publicKey,
		user.Email,
		roleList,
	)
	if err != nil {
		fmt.Fprint(w, "signing error")
		return
	}
	fmt.Fprint(w, signed)
}
