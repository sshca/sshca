package cmd

import (
	"context"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/shurcooL/graphql"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

func init() {
	loginCmd.PersistentFlags().StringVar(&keyFile, "keyfile", "", "file to get ssh host key from")
	loginCmd.PersistentFlags().StringVar(&serverURL, "server", "", "url of server")
	rootCmd.AddCommand(loginCmd)
}

var (
	loginCmd = &cobra.Command{
		Use:   "login",
		Short: "Start Login Sequence",
		Long:  `LONG DESC`,
		Run: func(cmd *cobra.Command, args []string) {
			data, err := ioutil.ReadFile(keyFile)
			if err != nil {
				log.Fatal("Error reading public key file")
			}
			client := graphql.NewClient(fmt.Sprintf("%s/api/graphql", serverURL), &http.Client{})

			var requestHostVerification struct {
				RequestHostVerification struct {
					Id       *graphql.String
					Finished graphql.Boolean
				} `graphql:"requestHostVerification(key: $key)"`
			}
			requestHostVerificationVariables := map[string]interface{}{
				"key": graphql.String(data),
			}
			err = client.Mutate(context.Background(), &requestHostVerification, requestHostVerificationVariables)
			if err != nil {
				log.Fatal(err)
			}
			if !requestHostVerification.RequestHostVerification.Finished {
				fmt.Printf("Go to %v/verifyHost/%v to complete verification\n", viper.GetString("server"), *requestHostVerification.RequestHostVerification.Id)
			}
		},
	}
)
