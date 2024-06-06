package cmd

import (
	"context"
	"fmt"
	"io/fs"
	"log"
	"net/http"
	"net/http/cookiejar"
	"os"
	"syscall"

	"github.com/AlecAivazis/survey/v2"
	"github.com/shurcooL/graphql"
	"github.com/spf13/cobra"
	"golang.org/x/term"
)

func init() {
	loginCommand.Flags().StringVarP(&Role, "role", "r", "", "Role to preselect")
	loginCommand.Flags().StringVarP(&KeyFile, "keyFile", "k", "", "Where to find ssh public key")
	loginCommand.Flags().StringVarP(&Email, "email", "e", "", "Email to login with")
	loginCommand.Flags().StringVarP(&CertFile, "certFile", "c", "", "Where to store certificate")
	loginCommand.Flags().StringVarP(&Server, "server", "s", "", "Server to connect to")
	loginCommand.MarkFlagRequired("role")
	loginCommand.MarkFlagRequired("keyFile")
	loginCommand.MarkFlagRequired("email")
	loginCommand.MarkFlagRequired("certFile")
	loginCommand.MarkFlagRequired("server")
	rootCmd.AddCommand(loginCommand)
}

var (
	Role         string
	KeyFile      string
	Email        string
	CertFile     string
	Server       string
	loginCommand = &cobra.Command{
		Use:   "login",
		Short: "Start Login Sequence",
		Long:  `LONG DESC`,
		Run: func(cmd *cobra.Command, args []string) {
			data, err := os.ReadFile(KeyFile)
			if err != nil {
				log.Fatal("Error reading public key file")
			}
			jar, err := cookiejar.New(nil)
			if err != nil {
				log.Fatal(err)
			}
			client := graphql.NewClient(fmt.Sprintf("%s/api/graphql", Server), &http.Client{
				Jar: jar,
			})
			var login struct {
				Login struct {
					Id graphql.String
				} `graphql:"login(email: $email, password: $password)"`
			}
			fmt.Print("Enter Password: \n")
			text, _ := term.ReadPassword(int(syscall.Stdin))
			loginVariables := map[string]interface{}{
				"email":    graphql.String(Email),
				"password": graphql.String(text),
			}
			err = client.Mutate(context.Background(), &login, loginVariables)
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
)
