package cmd

import (
	"bufio"
	"context"
	"fmt"
	"io/fs"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strings"
	"syscall"

	"net/http/cookiejar"

	"github.com/AlecAivazis/survey/v2"
	homedir "github.com/mitchellh/go-homedir"
	"github.com/shurcooL/graphql"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
	"golang.org/x/term"
)

var Role string

func init() {
	versionCmd.Flags().StringVarP(&Role, "role", "r", "", "Role to preselect")
	rootCmd.AddCommand(versionCmd)
}

var versionCmd = &cobra.Command{
	Use:   "login",
	Short: "Start Login Sequence",
	Long:  `LONG DESC`,
	Run: func(cmd *cobra.Command, args []string) {
		if viper.GetString("keyLocation") == "" {
			reader := bufio.NewReader(os.Stdin)
			fmt.Print("Enter SSH public key location: ")
			text, _ := reader.ReadString('\n')
			dir, _ := homedir.Dir()
			if text == "~" {
				text = dir
			} else if strings.HasPrefix(text, "~/") {
				text = filepath.Join(dir, text[2:])
			}
			viper.Set("keyLocation", text[:len(text)-1])
			err := viper.WriteConfig()
			if err != nil {
				log.Fatal("Failed to Write Config")
			}
		}
		if viper.GetString("server") == "" {
			reader := bufio.NewReader(os.Stdin)
			fmt.Print("Enter SSHCA server address: ")
			text, _ := reader.ReadString('\n')
			viper.Set("server", text[:len(text)-1])
			err := viper.WriteConfig()
			if err != nil {
				log.Fatal("Failed to Write Config")
			}
		}
		if viper.GetString("email") == "" {
			reader := bufio.NewReader(os.Stdin)
			fmt.Print("Enter SSHCA email: ")
			text, _ := reader.ReadString('\n')
			viper.Set("email", text[:len(text)-1])
			err := viper.WriteConfig()
			if err != nil {
				log.Fatal("Failed to Write Config")
			}
		}
		keyLocation := viper.GetString("keyLocation")
		data, err := ioutil.ReadFile(keyLocation)
		if err != nil {
			log.Fatal("Error reading public key file")
		}
		jar, err := cookiejar.New(nil)
		if err != nil {
			log.Fatal(err)
		}
		client := graphql.NewClient(fmt.Sprintf("%s/api/graphql", viper.GetString("server")), &http.Client{
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
			"email":    graphql.String(viper.GetString("email")),
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

		err = ioutil.WriteFile("/tmp/sshca-key.pub", []byte(generateKey.GenerateKey), fs.FileMode(0600))
		if err != nil {
			log.Fatal(err)
		}
	},
}
