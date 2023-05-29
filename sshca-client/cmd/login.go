package cmd

import (
	"context"
	"fmt"
	"io/fs"
	"log"
	"net/http"
	"os"
	"syscall"

	"net/http/cookiejar"

	"github.com/AlecAivazis/survey/v2"
	"github.com/shurcooL/graphql"
	"github.com/spf13/cobra"
	"golang.org/x/term"
)

var Role string
var KeyFile string
var Email string
var CertFile string
var Server string

func init() {
	versionCmd.Flags().StringVarP(&Role, "role", "r", "", "Role to preselect")
	versionCmd.Flags().StringVarP(&KeyFile, "keyFile", "k", "", "Where to find ssh public key")
	versionCmd.Flags().StringVarP(&Email, "email", "e", "", "Email to login with")
	versionCmd.Flags().StringVarP(&CertFile, "certFile", "c", "", "Where to store certificate")
	versionCmd.Flags().StringVarP(&Server, "server", "s", "", "Server to connect to")
	rootCmd.AddCommand(versionCmd)
}

var versionCmd = &cobra.Command{
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
		fmt.Printf("Logged in with id: %v\n", login.Login.Id)
		var subroles struct {
			Subroles []struct {
				Id       graphql.ID
				HostName graphql.String
				User     graphql.String
			} `graphql:"listSubroles"`
		}
		err = client.Query(context.Background(), &subroles, map[string]interface{}{})
		if err != nil {
			log.Fatal(err)
		}
		options := make([]string, len(subroles.Subroles))
		role := -1
		for i := 0; i < len(subroles.Subroles); i++ {
			userFriendlyRole := fmt.Sprintf("%v@%v", subroles.Subroles[i].User, subroles.Subroles[i].HostName)
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
		fmt.Println(subroles.Subroles[role])
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

		err = os.WriteFile(CertFile, []byte(generateKey.GenerateKey), fs.FileMode(0600))
		if err != nil {
			log.Fatal(err)
		}
	},
}
