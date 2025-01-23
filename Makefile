clean:
	rm -rf build/

mkdir:
	mkdir build/

copy:
	sh/copy

build: clean mkdir copy
	deno run --config etc/deno.json --allow-run --allow-net --allow-read --allow-write --allow-env build.ts

test:
	deno test --config etc/deno.json --allow-env test/App.test.jsx

check:
	deno check --config etc/deno.json src/js/index.tsx

.PHONY: test
