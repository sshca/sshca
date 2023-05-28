package cmd

import (
	"context"
	"fmt"
	"io/fs"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/shurcooL/graphql"
	"github.com/spf13/cobra"
)

func init() {
	rootCmd.PersistentFlags().StringVar(&keyFile, "keyfile", "", "file to get ssh host key from")
	rootCmd.PersistentFlags().StringVar(&serverURL, "server", "", "url of server")
	rootCmd.PersistentFlags().StringVar(&certFile, "certFile", "", "file to write ssh host cert")
	rootCmd.PersistentFlags().StringVar(&caFile, "caFile", "", "file to write ssh CA")

	rootCmd.AddCommand(genCertCmd)
}

var (
	keyFile   string
	certFile  string
	caFile    string
	serverURL string

	genCertCmd = &cobra.Command{
		Use:   "genCert",
		Short: "Generate certificates after login",
		Long:  `LONG DESC`,
		Run: func(cmd *cobra.Command, args []string) {
			data, err := ioutil.ReadFile(keyFile)
			if err != nil {
				log.Fatal("Error reading public key file")
			}
			client := graphql.NewClient(fmt.Sprintf("%s/api/graphql", serverURL), &http.Client{})

			var generateHostKey struct {
				GenerateHostKey struct {
					Cert  graphql.String
					CaPub graphql.String
				} `graphql:"generateHostKey(key: $key)"`
			}
			generateHostKeyVariables := map[string]interface{}{
				"key": graphql.String(data),
			}
			err = client.Mutate(context.Background(), &generateHostKey, generateHostKeyVariables)
			if err != nil {
				log.Fatal(err)
			}

			err = ioutil.WriteFile(certFile, []byte(generateHostKey.GenerateHostKey.Cert), fs.FileMode(0644))
			if err != nil {
				log.Fatal(err)
			}
			err = ioutil.WriteFile(caFile, []byte(generateHostKey.GenerateHostKey.CaPub), fs.FileMode(0644))
			if err != nil {
				log.Fatal(err)
			}
		},
	}
)
