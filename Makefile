MODELS_SRC = $(wildcard app/models/*.es6)
MODELS_LIB = $(MODELS_SRC:app/models/%.es6=public/js/app/models/%.js)
COMPONENTS_SRC = $(wildcard app/components/*.es6)
COMPONENTS_LIB = $(COMPONENTS_SRC:app/components/%.es6=public/js/app/components/%.js)

all: $(MODELS_LIB) $(COMPONENTS_LIB)

public/js/app/models/%.js: app/models/%.es6
	babel $< -o $@

public/js/app/components/%.js: app/components/%.es6
	babel $< -o $@
