package lib

import (
	"fmt"
	"net/http"
)

func Ping(w http.ResponseWriter, _ *http.Request) {
	_, err := fmt.Fprint(w, "Pong")
	if err != nil {
		return 
	}
}
