package lib

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/shurcooL/graphql"
)

func PostSetup(client *graphql.Client, key []byte) {
	var requestHostPrincipals struct {
		HostPrincipals []struct {
			Username graphql.String
			Id       graphql.ID
		} `graphql:"hostPrincipals(key: $key)"`
	}
	requestHostPrincipalsVariables := map[string]interface{}{
		"key": graphql.String(key),
	}
	err := client.Query(context.Background(), &requestHostPrincipals, requestHostPrincipalsVariables)
	if err != nil {
		log.Fatal(err)
	}
	os.Mkdir("/etc/ssh/sshca", 0644)
	os.RemoveAll("/etc/sshca/auth_principals")
	os.Mkdir("/etc/ssh/sshca/auth_principals", 0644)
	for i := 0; i < len(requestHostPrincipals.HostPrincipals); i++ {
		f, err := os.OpenFile(fmt.Sprintf("/etc/ssh/sshca/auth_principals/%s", requestHostPrincipals.HostPrincipals[i].Username), os.O_APPEND|os.O_WRONLY|os.O_CREATE, 0600)
		if err != nil {
			panic(err)
		}

		defer f.Close()

		if _, err = f.WriteString(fmt.Sprintf("sshca_subrole_%s", requestHostPrincipals.HostPrincipals[i].Id)); err != nil {
			panic(err)
		}
		log.Printf("Username: %s, ID: %s \n", requestHostPrincipals.HostPrincipals[i].Username, requestHostPrincipals.HostPrincipals[i].Id)
	}
}
