UID_LOCAL				?= $(shell id -u)
GID_LOCAL				?= $(shell id -g)
CONTAINER_NAME	= ProjectNestJS
IMAGE_BUILD			= lguisadom/project-nestjs:1.0
PORT						= 3000
IMAGE_BASE			= node:16.17.1-alpine3.16
APP_DIR					= app

## Levanta en contenedor docker
up-docker:
	docker container run -p "$(PORT):$(PORT)" --rm "$(IMAGE_BUILD)"
