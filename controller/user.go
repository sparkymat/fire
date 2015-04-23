package controller

import "net/http"

type User struct {
}

func (user User) Login(response http.ResponseWriter, request *http.Request, params map[string][]string) {
}

func (user User) Logout(response http.ResponseWriter, request *http.Request, params map[string][]string) {
}

func (user User) Register(response http.ResponseWriter, request *http.Request, params map[string][]string) {
}
