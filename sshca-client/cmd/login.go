package cmd

import (
	"bufio"
	"bytes"
	"encoding/json"
	"fmt"
	"io/fs"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strings"

	"github.com/lavalleeale/sshca/sshca-client/lib"
	homedir "github.com/mitchellh/go-homedir"
	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

func init() {
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
		keyLocation := viper.GetString("keyLocation")
		data, err := ioutil.ReadFile(keyLocation)
		if err != nil {
			log.Fatal("Error reading public key file")
		}
		var dat = map[string]string{}
		dat["code"] = lib.Login()
		dat["key"] = string(data)
		marshal, err := json.Marshal(dat)
		if err != nil {
			log.Fatal("Error encoding JSON")
		}
		resp, err := http.Post(fmt.Sprintf("%s/api/cli/login", viper.GetString("server")), "application/json", bytes.NewBuffer(marshal))
		if err != nil {
			log.Print(fmt.Sprintf("%s/api/cli/login", viper.GetString("server")))
			log.Fatal("Http Request Failed")
		}
		defer resp.Body.Close()
		if resp.StatusCode == http.StatusOK {
			bodyBytes, err := ioutil.ReadAll(resp.Body)
			if err != nil {
				log.Fatal(err)
			}
			err = ioutil.WriteFile("/tmp/sshca-key.pub", bodyBytes, fs.FileMode(0600))
			if err != nil {
				log.Fatal(err)
			}
		}
	},
}
