package lib

import (
	"crypto/rand"
	"errors"
	"io"
	"log"
	"os"
	"time"

	"golang.org/x/crypto/ssh"
)

type sshAlgorithmSigner struct {
	algorithm string
	signer    ssh.AlgorithmSigner
}

func (s *sshAlgorithmSigner) PublicKey() ssh.PublicKey {
	return s.signer.PublicKey()
}

func (s *sshAlgorithmSigner) Sign(rand io.Reader, data []byte) (*ssh.Signature, error) {
	return s.signer.SignWithAlgorithm(rand, data, s.algorithm)
}

func NewAlgorithmSignerFromSigner(sshSigner ssh.Signer, algorithm string) (ssh.Signer, error) {
	algorithmSigner, ok := sshSigner.(ssh.AlgorithmSigner)
	if !ok {
		return nil, errors.New("unable to cast to ssh.AlgorithmSigner")
	}
	s := sshAlgorithmSigner{
		signer:    algorithmSigner,
		algorithm: algorithm,
	}
	return &s, nil
}

func Sign(publicKey ssh.PublicKey, email string, roles []string) (string, error) {
	privKey := os.Getenv("SSH_KEY")
	key, err := ssh.ParsePrivateKey([]byte(privKey))
	if err != nil {
		log.Println(err)
		return "", errors.New("invalid ssh key")
	}
	cert := generateCert(publicKey, email, roles)
	sshAlgorithmSigner, _ := NewAlgorithmSignerFromSigner(key, ssh.SigAlgoRSASHA2256)
	err = cert.SignCert(rand.Reader, sshAlgorithmSigner)
	if err != nil {
		return "", errors.New("failed to sign cert")
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
		CertType: ssh.UserCert, Permissions: permissions, Key: pub, ValidAfter: uint64(time.Now().Unix()), ValidBefore: uint64(time.Now().Add(time.Minute * 10).Unix()), KeyId: email, ValidPrincipals: roles,
	}
}

func marshalCert(cert *ssh.Certificate) []byte {
	return ssh.MarshalAuthorizedKey(cert)
}
