package main

import (
	"io"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/sparkymat/fire/controller"
	"github.com/sparkymat/reactor"
	"github.com/sparkymat/resty"
	shttp "github.com/sparkymat/webdsl/http"
)

func main() {
	r := resty.NewRouter()

	r.Resource([]string{"users"}, controller.User{}).Only().
		Collection("login", []shttp.Method{shttp.Post}).
		Collection("logout", []shttp.Method{shttp.Post}).
		Collection("register", []shttp.Method{shttp.Post})

	r.HandleFunc("/", func(response http.ResponseWriter, request *http.Request) {
		app := reactor.New("FireApp")
		app.MapJavascriptFolder("public/js/core", "js/core")
		app.MapJavascriptFolder("public/js/framework", "js/framework")
		app.MapJavascriptFolder("public/js/app/models", "js/app/models")
		app.MapJavascriptFolder("public/js/app/components", "js/app/components")
		app.MapCssFolder("public/css", "css")

		io.WriteString(response, app.Html().String())
	})

	r.HandleFunc("/p/{id}", func(response http.ResponseWriter, request *http.Request) {
		app := reactor.New("FireApp")
		app.MapJavascriptFolder("public/js/core", "js/core")
		app.MapJavascriptFolder("public/js/framework", "js/framework")
		app.MapJavascriptFolder("public/js/app/models", "js/app/models")
		app.MapJavascriptFolder("public/js/app/components", "js/app/components")
		app.MapCssFolder("public/css", "css")

		vars := mux.Vars(request)
		props := make(map[string]string)
		props["post_id"] = vars["id"]

		app.SetInitialProperties(props)

		io.WriteString(response, app.Html().String())
	})

	r.PathPrefix("/").Handler(http.FileServer(http.Dir("./public/")))

	r.PrintRoutes(os.Stdout)
	r.HandleRoot()

	http.ListenAndServe(":5000", nil)
}
