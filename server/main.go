package main

import (
	"log"
	"net/http"

	"github.com/lavalleeale/sshca/server/lib"
	"github.com/lavalleeale/sshca/server/lib/web"
	"github.com/lavalleeale/sshca/server/lib/web/hosts"
	"github.com/lavalleeale/sshca/server/lib/web/roles"
	"github.com/lavalleeale/sshca/server/lib/web/users"

	"github.com/lavalleeale/sshca/server/lib/cli"

	"github.com/lavalleeale/sshca/server/db"

	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	err = db.Open()
	if err != nil {
		log.Fatal("Failed to Open DB")
	}
	err = db.Db.AutoMigrate(&db.Role{}, &db.User{}, &db.Host{}, &db.Subrole{})
	if err != nil {
		log.Fatal("Failed to Migrate DB")
	}
	mux := http.NewServeMux()
	mux.HandleFunc("/api/cli/login", cli.Login_cli)
	mux.HandleFunc("/api/web/login", web.Login_web)
	mux.HandleFunc("/api/web/getKey", web.Get_key)
	mux.HandleFunc("/api/web/changeRoles", web.Change_roles)
	mux.HandleFunc("/api/web/changeUsers", web.Change_users)
	mux.HandleFunc("/api/ping", lib.Ping)

	mux.HandleFunc("/api/web/users", users.List)
	mux.HandleFunc("/api/web/user", users.Get)
	mux.HandleFunc("/api/web/addUser", users.Add)
	mux.HandleFunc("/api/web/deleteUser", users.Delete)

	mux.HandleFunc("/api/web/roles", roles.List)
	mux.HandleFunc("/api/web/addRole", roles.Add)
	mux.HandleFunc("/api/web/role", roles.Get)
	mux.HandleFunc("/api/web/deleteRole", roles.Delete)

	mux.HandleFunc("/api/web/hosts", hosts.List)
	mux.HandleFunc("/api/web/addHost", hosts.Add)
	mux.HandleFunc("/api/web/host", hosts.Get)
	mux.HandleFunc("/api/web/deleteHost", hosts.Delete)

	log.Println("Started Server")
	err = http.ListenAndServe(":5000", mux)
	if err != nil {
		log.Fatal("Failed to Start HTTP Server")
	}
}
