package web

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"golang.org/x/crypto/ssh"
)

func Get_key(w http.ResponseWriter, r *http.Request) {
	privKey := os.Getenv("SSH_KEY")
	key, err := ssh.ParsePrivateKey([]byte(privKey))
	if err != nil {
		log.Println(err)
		// http.Error(w, "Error getting public key", http.StatusInternalServerError)
		return
	}
	fmt.Fprint(w, string(ssh.MarshalAuthorizedKey(key.PublicKey())))
}
