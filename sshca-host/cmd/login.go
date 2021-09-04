package cmd

import (
	"bufio"
	"context"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"

	"github.com/shurcooL/graphql"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
	"github.com/sshca/sshca/sshca-host/lib"
)

func init() {
	rootCmd.AddCommand(loginCmd)
}

var loginCmd = &cobra.Command{
	Use:   "login",
	Short: "Start Login Sequence",
	Long:  `LONG DESC`,
	Run: func(cmd *cobra.Command, args []string) {
		if viper.GetString("keyLocation") == "" {
			reader := bufio.NewReader(os.Stdin)
			fmt.Print("Enter SSH public key location: ")
			text, _ := reader.ReadString('\n')
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
		keyLocation := viper.GetString("keyLocation")
		data, err := ioutil.ReadFile(keyLocation)
		if err != nil {
			log.Fatal("Error reading public key file")
		}
		client := graphql.NewClient(fmt.Sprintf("%s/api/graphql", viper.GetString("server")), &http.Client{})

		if err != nil {
			log.Fatal("Error parsing public key file")
		}
		var requestHostVerification struct {
			Id graphql.String `graphql:"requestHostVerification(key: $key)"`
		}
		requestHostVerificationVariables := map[string]interface{}{
			"key": graphql.String(data),
		}
		err = client.Mutate(context.Background(), &requestHostVerification, requestHostVerificationVariables)
		if err != nil {
			log.Fatal(err)
		}
		fmt.Printf("Go to %v/verifyHost/%v to complete verification\n", viper.GetString("server"), requestHostVerification.Id)
		log.Println("Press enter after verification")
		_, _ = bufio.NewReader(os.Stdin).ReadString('\n')
		lib.PostSetup(client, data)

		// err = ioutil.WriteFile("/tmp/sshca-key.pub", []byte(generateKey.GenerateKey), fs.FileMode(0600))
		// if err != nil {
		// 	log.Fatal(err)
		// }
	},
}
