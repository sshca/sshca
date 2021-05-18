package lib

import (
	"crypto/rand"
	"errors"
	"log"
	"os"
	"time"

	"golang.org/x/crypto/ssh"
)

func Sign(publicKey ssh.PublicKey, email string, roles []string) (string, error) {
	privKey := os.Getenv("SSH_KEY")
	key, err := ssh.ParsePrivateKey([]byte(privKey))
	if err != nil {
		log.Println(err)
		return "", errors.New("invalid ssh key")
	}
	cert := generateCert(publicKey, email, roles)
	err = cert.SignCert(rand.Reader, key)
	if err != nil {
		log.Println("Failed to Unmarshal JSON")
	}
	return string(marshalCert(cert)), nil
}

func generateCert(pub ssh.PublicKey, email string, roles []string) *ssh.Certificate {
	permissions := ssh.Permissions{
		CriticalOptions: map[string]string{},
		Extensions: map[string]string{
			"permit-X11-forwarding":   "",
			"permit-agent-forwarding": "",
			"permit-port-forwarding":  "",
			"permit-pty":              "",
			"permit-user-rc":          "",
		},
	}
	return &ssh.Certificate{
		CertType: ssh.UserCert, Permissions: permissions, Key: pub, ValidAfter: uint64(time.Now().Unix()), ValidBefore: uint64(time.Now().AddDate(0, 0, 7).Unix()), KeyId: email, ValidPrincipals: roles,
	}
}

func marshalCert(cert *ssh.Certificate) []byte {
	return ssh.MarshalAuthorizedKey(cert)
}
