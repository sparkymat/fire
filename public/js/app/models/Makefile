SRC = $(wildcard src/*.es6)
LIB = $(SRC:src/%.es6=build/%.js)

all: $(LIB)

build/%.js: src/%.es6
	babel $< -o $@
