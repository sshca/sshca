package cmd

import (
	"context"
	"crypto/rand"
	"encoding/base64"
	"fmt"
	"io/fs"
	"log"
	"net/http"
	"net/http/cookiejar"
	"os"

	"github.com/AlecAivazis/survey/v2"
	"github.com/shurcooL/graphql"
	"github.com/spf13/cobra"
	"golang.org/x/crypto/ssh"
)

func init() {
	keyLoginCommand.Flags().StringVarP(&Role, "role", "r", "", "Role to preselect")
	keyLoginCommand.Flags().StringVarP(&KeyFile, "keyFile", "k", "", "Where to find ssh public key")
	keyLoginCommand.Flags().StringVar(&PrivateKeyFile, "privateKeyFile", "", "Where to find ssh private key for challenge signing")
	keyLoginCommand.Flags().StringVarP(&CertFile, "certFile", "c", "", "Where to store certificate")
	keyLoginCommand.Flags().StringVarP(&Server, "server", "s", "", "Server to connect to")
	if err := keyLoginCommand.MarkFlagRequired("role"); err != nil {
		log.Fatal(err)
	}
	if err := keyLoginCommand.MarkFlagRequired("privateKeyFile"); err != nil {
		log.Fatal(err)
	}
	if err := keyLoginCommand.MarkFlagRequired("certFile"); err != nil {
		log.Fatal(err)
	}
	if err := keyLoginCommand.MarkFlagRequired("server"); err != nil {
		log.Fatal(err)
	}
	rootCmd.AddCommand(keyLoginCommand)
}

var PrivateKeyFile string

var keyLoginCommand = &cobra.Command{
	Use:   "genCert",
	Short: "Login without password using a signed key challenge",
	Long:  `LONG DESC`,
	Run: func(cmd *cobra.Command, args []string) {
		publicKeyFile := KeyFile
		if publicKeyFile == "" {
			publicKeyFile = PrivateKeyFile + ".pub"
		}
		data, err := os.ReadFile(publicKeyFile)
		if err != nil {
			log.Fatal("Error reading public key file")
		}
		privateKeyData, err := os.ReadFile(PrivateKeyFile)
		if err != nil {
			log.Fatal("Error reading private key file")
		}
		signer, err := ssh.ParsePrivateKey(privateKeyData)
		if err != nil {
			log.Fatal("Error parsing private key file")
		}
		jar, err := cookiejar.New(nil)
		if err != nil {
			log.Fatal(err)
		}
		client := graphql.NewClient(fmt.Sprintf("%s/api/graphql", Server), &http.Client{
			Jar: jar,
		})
		var beginLogin struct {
			BeginKeyLogin struct {
				Id    graphql.ID
				Nonce graphql.String
			} `graphql:"beginKeyLogin(key: $key)"`
		}
		loginVariables := map[string]interface{}{
			"key": graphql.String(data),
		}
		err = client.Mutate(context.Background(), &beginLogin, loginVariables)
		if err != nil {
			log.Fatal(err)
		}
		signature, err := signer.Sign(rand.Reader, []byte(beginLogin.BeginKeyLogin.Nonce))
		if err != nil {
			log.Fatal(err)
		}
		var completeLogin struct {
			CompleteKeyLogin graphql.ID `graphql:"completeKeyLogin(id: $id, key: $key, signature: $signature)"`
		}
		completeLoginVariables := map[string]interface{}{
			"id":        beginLogin.BeginKeyLogin.Id,
			"key":       graphql.String(data),
			"signature": graphql.String(base64.StdEncoding.EncodeToString(ssh.Marshal(signature))),
		}
		err = client.Mutate(context.Background(), &completeLogin, completeLoginVariables)
		if err != nil {
			log.Fatal(err)
		}
		var subroles struct {
			Subroles []struct {
				Id   graphql.ID
				Host struct {
					Hostname graphql.String
				}
				Username graphql.String
			} `graphql:"listSubroles"`
		}
		err = client.Query(context.Background(), &subroles, map[string]interface{}{})
		if err != nil {
			log.Fatal(err)
		}
		if len(subroles.Subroles) == 0 {
			log.Fatal("User has no subroles")
		}
		options := make([]string, len(subroles.Subroles))
		role := -1
		for i := 0; i < len(subroles.Subroles); i++ {
			userFriendlyRole := fmt.Sprintf("%v@%v", subroles.Subroles[i].Username, subroles.Subroles[i].Host.Hostname)
			if userFriendlyRole == Role {
				role = i
				break
			}
			options[i] = userFriendlyRole
		}
		if role == -1 {
			prompt := &survey.Select{
				Message: "Choose a role:",
				Options: options,
			}
			err = survey.AskOne(prompt, &role, survey.WithValidator(survey.Required))
			if err != nil {
				log.Fatal(err)
			}
		}
		var generateKey struct {
			GenerateKey graphql.String `graphql:"generateKey(key: $key, subroleId: $subroleId)"`
		}
		generateKeyVariables := map[string]interface{}{
			"key":       graphql.String(data),
			"subroleId": graphql.ID(subroles.Subroles[role].Id),
		}
		err = client.Mutate(context.Background(), &generateKey, generateKeyVariables)
		if err != nil {
			log.Fatal(err)
		}

		err = os.WriteFile(CertFile, []byte(generateKey.GenerateKey), fs.FileMode(0o600))
		if err != nil {
			log.Fatal(err)
		}
	},
}
