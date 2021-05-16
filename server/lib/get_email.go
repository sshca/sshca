package lib

import (
	"encoding/json"
	"errors"
	"io/ioutil"
	"log"
	"net/http"
	"net/url"
	"os"
	"strings"
)

func GetToken(code string) (string, error) {
	encoded := url.Values{}
	encoded.Set("code", code)
	encoded.Set("client_id", os.Getenv("CLIENT_ID"))
	encoded.Set("client_secret", os.Getenv("CLIENT_SECRET"))
	encoded.Set("grant_type", "authorization_code")
	encoded.Set("redirect_uri", os.Getenv("REDIRECT_URI"))

	resp, err := http.Post("https://www.googleapis.com/oauth2/v4/token", "application/x-www-form-urlencoded", strings.NewReader(encoded.Encode()))
	if err != nil {
		log.Print("Google HTTP request Failed")
		return "", errors.New("google http request Failed")
	}
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Print("Error Decoding Response")
		return "", errors.New("error decoding response")
	}
	var dat struct {
		Access_token string `json:"access_token"`
	}
	json.Unmarshal(body, &dat)
	return dat.Access_token, nil
}
func GetEmail(token string) (string, error) {
	req, err := http.NewRequest("GET", "https://www.googleapis.com/oauth2/v2/userinfo", nil)
	if err != nil {
		log.Print("Error Creating HTTP Request")
		return "", errors.New("error creating http request")
	}
	req.Header.Add("Authorization", "Bearer "+token)
	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		log.Print("Google HTTP request Failed")
		return "", errors.New("google http request failed")
	}
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Print("Error Decoding Response")
		return "", errors.New("error decoding response")
	}
	var dat struct {
		Email string `json:"email"`
	}
	json.Unmarshal(body, &dat)
	return dat.Email, nil
}
