package web

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"golang.org/x/crypto/ssh"
)

func GetKey(w http.ResponseWriter, _ *http.Request) {
	privKey := os.Getenv("SSH_KEY")
	key, err := ssh.ParsePrivateKey([]byte(privKey))
	if err != nil {
		log.Println(err)
		// http.Error(w, "Error getting public key", http.StatusInternalServerError)
		return
	}
	_, _ = fmt.Fprint(w, string(ssh.MarshalAuthorizedKey(key.PublicKey())))
}
