
build: components index.js
	@component build --dev

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

test:
	serve .

test-http:
	serve -p 80 .

.PHONY: clean test test-http
