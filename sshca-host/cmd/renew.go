package cmd

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/shurcooL/graphql"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
	"github.com/sshca/sshca/sshca-host/lib"
)

func init() {
	rootCmd.AddCommand(renewCmd)
}

var renewCmd = &cobra.Command{
	Use:   "renew",
	Short: "Renew Cert",
	Long:  `LONG DESC`,
	Run: func(cmd *cobra.Command, args []string) {
		keyLocation := viper.GetString("keyLocation")
		data, err := ioutil.ReadFile(keyLocation)
		if err != nil {
			log.Fatal("Error reading public key file")
		}
		client := graphql.NewClient(fmt.Sprintf("%s/api/graphql", viper.GetString("server")), &http.Client{})

		lib.PostSetup(client, data)
	},
}
