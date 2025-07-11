SERVICE := "autofork"

[private]
alias i := install

[private]
[doc('
    List all available commands.
    ex:
        just
')]
default:
    @just --list

[doc('
    Open a shell in the container.
    ex:
        just cmd
')]
cmd:
	@docker compose run --build --rm -it {{SERVICE}} /bin/bash

[doc('
    Install the project dependencies.
    ex:
        just install
        just i
')]
install:
	@docker compose run --build --rm {{SERVICE}} npm install
	@docker compose run --build --rm {{SERVICE}} chown -R node:node .

[doc('
    Add a new dependency to the project.
    ex:
        just add "package"
        just add "package1 package2"
        just add "-D dev-package"
')]
add deps:
	@docker compose run --rm {{SERVICE}} npm install {{deps}}
	@docker compose run --rm {{SERVICE}} chown -R node:node .

[doc('
    Add a new shadcn component to the project.
    ex:
        just shadcn-add "button"
')]
shadcn-add deps:
	@docker compose run --rm {{SERVICE}} npx shadcn@latest add {{deps}}
	@docker compose run --rm {{SERVICE}} chown -R node:node .

[doc('
    Run the linter.
    ex:
        just lint
')]
lint:
	@docker compose run --rm {{SERVICE}} node --run lint

[doc('
    Build the project.
    ex:
        just build
')]
build:
	@docker compose run --rm {{SERVICE}} node --run build
	@docker compose run --rm {{SERVICE}} chown -R node:node .

[doc('
    Run the project from the generated build.
    ex:
        just start
')]
start:
	@docker compose run --rm --service-ports {{SERVICE}} node --run start

[doc('
    Run the project in development mode.
    ex:
        just dev
')]
dev:
	@docker compose run --build --rm --service-ports {{SERVICE}} node --run dev
