package main

import (
	"log"
	"net/http"

	"github.com/lavalleeale/sshca/server/lib/web"

	"github.com/lavalleeale/sshca/server/lib/cli"

	"github.com/lavalleeale/sshca/server/db"

	"github.com/joho/godotenv"
	"github.com/rs/cors"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	db.Open()
	db.Db.AutoMigrate(&db.Role{}, &db.User{}, &db.Subrole{}, &db.Host{})
	mux := http.NewServeMux()
	mux.HandleFunc("/cli/login", cli.Login_cli)
	mux.HandleFunc("/web/login", web.Login_web)
	mux.HandleFunc("/web/getKey", web.Get_key)
	mux.HandleFunc("/web/roles", web.Roles_web)
	mux.HandleFunc("/web/hosts", web.Hosts_web)
	mux.HandleFunc("/web/users", web.Users_web)
	mux.HandleFunc("/web/addHost", web.Add_host)
	mux.HandleFunc("/web/addUser", web.Add_user)
	mux.HandleFunc("/web/addRole", web.Add_role)
	mux.HandleFunc("/web/host", web.Host_web)
	mux.HandleFunc("/web/user", web.User_web)
	mux.HandleFunc("/web/changeRoles", web.Change_roles)
	handler := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:3000"},
		AllowCredentials: true,
	}).Handler(mux)
	log.Println("Started Server")
	http.ListenAndServe(":5000", handler)
}
