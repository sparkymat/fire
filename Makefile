MODELS_SRC = $(wildcard app/models/*.es6)
MODELS_LIB = $(MODELS_SRC:app/models/%.es6=public/js/app/models/%.js)
COMPONENTS_SRC = $(wildcard app/components/*.es6)
COMPONENTS_LIB = $(COMPONENTS_SRC:app/components/%.es6=public/js/app/components/%.js)

GO_BINARY = fire
GO_SRC = fire.go controller/user.go

all: $(MODELS_LIB) $(COMPONENTS_LIB) $(GO_BINARY)

$(GO_BINARY): $(GO_SRC)
	go build main.go

public/js/app/models/%.js: app/models/%.es6
	mkdir -p public/js/app/models
	babel $< -o $@

public/js/app/components/%.js: app/components/%.es6
	mkdir -p public/js/app/components
	babel $< -o $@

clean: 
	rm -f fire
	rm -rf public/js/app
