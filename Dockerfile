FROM alpine:3.16.2

# instalando paquetes
RUN apk update && apk upgrade && apk add --no-cache \
  nodejs=16.17.1-r0 npm

# configurando entorno
WORKDIR /app

COPY ./app/package*.json /app/

RUN npm install

COPY ./app /app

EXPOSE 3000

CMD [ "npm", "start"]