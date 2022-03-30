package cmd

import (
	"bufio"
	"context"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"

	"strings"

	"github.com/shurcooL/graphql"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
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
		fmt.Println("Press enter after verification")
		_, _ = bufio.NewReader(os.Stdin).ReadString('\n')

		// Generate Certificate For Host
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
		sshConfigFile, err := os.OpenFile("/etc/ssh/sshd_config", os.O_APPEND|os.O_RDWR, 0600)
		if err != nil {
			panic(err)
		}

		defer sshConfigFile.Close()

		stat, err := sshConfigFile.Stat()
		if err != nil {
			panic(err)
		}
		var sshConfigBytes = make([]byte, stat.Size())

		sshConfigFile.Read(sshConfigBytes)
		sshConfigString := string(sshConfigBytes)
		if !strings.Contains(string(sshConfigString), "sshca") {
			sshConfigFile.WriteString("\nTrustedUserCAKeys /etc/ssh/sshca_ca.pub\nHostCertificate /etc/ssh/sshca_cert.pub")
			caFile, err := os.OpenFile("/etc/ssh/sshca_ca.pub", os.O_APPEND|os.O_WRONLY|os.O_CREATE, 0644)
			if err != nil {
				panic(err)
			}

			defer caFile.Close()

			caFile.WriteString(string(generateHostKey.GenerateHostKey.CaPub))
		}
		hostKeyFile, err := os.OpenFile("/etc/ssh/sshca_cert.pub", os.O_WRONLY|os.O_CREATE, 0644)

		defer hostKeyFile.Close()

		hostKeyFile.WriteString(string(generateHostKey.GenerateHostKey.Cert))
	},
}
