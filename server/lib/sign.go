package lib

import (
	"crypto/rand"
	"errors"
	"fmt"
	"os"
	"time"

	"golang.org/x/crypto/ssh"
)

func Sign(publicKey ssh.PublicKey, email string, roles []string) (string, error) {
	fmt.Println(roles)
	privKey := os.Getenv("SSH_KEY")
	key, err := ssh.ParsePrivateKey([]byte(privKey))
	if err != nil {
		fmt.Println(err)
		return "", errors.New("invalid ssh key")
	}
	cert := generateCert(publicKey, email, roles)
	cert.SignCert(rand.Reader, key)
	return string(marshalCert(cert)), nil
}

func generateCert(pub ssh.PublicKey, email string, roles []string) *ssh.Certificate {
	permissions := ssh.Permissions{
		CriticalOptions: map[string]string{},
		Extensions:      map[string]string{},
	}
	return &ssh.Certificate{
		CertType: ssh.UserCert, Permissions: permissions, Key: pub, ValidAfter: uint64(time.Now().Unix()), ValidBefore: uint64(time.Now().AddDate(0, 0, 7).Unix()), KeyId: email, ValidPrincipals: roles,
	}
}

func marshalCert(cert *ssh.Certificate) []byte {
	return ssh.MarshalAuthorizedKey(cert)
}
