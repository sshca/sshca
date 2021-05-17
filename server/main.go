package main

import (
	"log"
	"net/http"

	"github.com/lavalleeale/sshca/server/lib/web"

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
	mux.HandleFunc("/api/web/roles", web.Roles_web)
	mux.HandleFunc("/api/web/hosts", web.Hosts_web)
	mux.HandleFunc("/api/web/users", web.Users_web)
	mux.HandleFunc("/api/web/addHost", web.Add_host)
	mux.HandleFunc("/api/web/addUser", web.Add_user)
	mux.HandleFunc("/api/web/addRole", web.Add_role)
	mux.HandleFunc("/api/web/host", web.Host_web)
	mux.HandleFunc("/api/web/user", web.User_web)
	mux.HandleFunc("/api/web/changeRoles", web.Change_roles)
	log.Println("Started Server")
	err = http.ListenAndServe(":5000", mux)
	if err != nil {
		log.Fatal("Failed to Start HTTP Server")
	}
}
