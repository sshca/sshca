package cmd

import (
	"context"
	"fmt"
	"io/fs"
	"log"
	"net/http"
	"os"

	"net/http/cookiejar"

	"github.com/AlecAivazis/survey/v2"
	"github.com/shurcooL/graphql"
	"github.com/spf13/cobra"
)

func init() {
	keyLoginCommand.Flags().StringVarP(&Role, "role", "r", "", "Role to preselect")
	keyLoginCommand.Flags().StringVarP(&KeyFile, "keyFile", "k", "", "Where to find ssh public key")
	keyLoginCommand.Flags().StringVarP(&CertFile, "certFile", "c", "", "Where to store certificate")
	keyLoginCommand.Flags().StringVarP(&Server, "server", "s", "", "Server to connect to")
	rootCmd.AddCommand(keyLoginCommand)
}

var keyLoginCommand = &cobra.Command{
	Use:   "genCert",
	Short: "Login without password",
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
			KeyLogin graphql.ID `graphql:"keyLogin(key: $key)"`
		}
		loginVariables := map[string]interface{}{
			"key": graphql.String(data),
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

		err = os.WriteFile(CertFile, []byte(generateKey.GenerateKey), fs.FileMode(0600))
		if err != nil {
			log.Fatal(err)
		}
	},
}
