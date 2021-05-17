package lib

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/fatih/color"
	"github.com/skratchdot/open-golang/open"
)

func callbackHandler(w http.ResponseWriter, r *http.Request, f func(code string)) {
	code := r.URL.Query()["code"][0]

	// show succes page
	msg := "<p><strong>Success!</strong></p>"
	msg = msg + "<p>You are authenticated and can now return to the CLI.</p>"
	fmt.Fprintln(w, msg)
	time.AfterFunc(time.Second, func() { f(code) })
}

func Login() string {
	client := "257154229658-pe8cva4s85dse1hj6gcjmol2gqetcgqg.apps.googleusercontent.com"
	redirectURI := "http%3A%2F%2F127.0.0.1%3A9999%2Foauth%2Fcallback"

	url := fmt.Sprintf("https://accounts.google.com/o/oauth2/auth?scope=email&response_type=code&access_type=offline&redirect_uri=%s&client_id=%s", redirectURI, client)

	log.Println(color.CyanString("You will now be taken to your browser for authentication"))
	time.Sleep(1 * time.Second)
	err := open.Run(url)
	if err != nil {
		log.Fatal("Failed to Open url")
	}

	m := http.NewServeMux()
	s := http.Server{Addr: ":9999", Handler: m}
	code := ""
	m.HandleFunc("/oauth/callback", func(w http.ResponseWriter, r *http.Request) {
		callbackHandler(w, r, func(newCode string) {
			code = newCode
			err = s.Shutdown(context.Background())
			if err != nil {
				log.Fatal("Failed to Stop HTTP Server")
			}
		})
	})
	err = s.ListenAndServe()
	if err != nil {
		log.Fatal("Failed to Start HTTP Server")
	}
	return code
}
