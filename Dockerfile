FROM node:15.2.0-alpine3.10

# update packages
RUN apk update

# create working folder
WORKDIR /app

# copy all files to working directory
COPY .env ./

COPY jest.config.js ./
COPY package*.json ./
COPY tsconfig.json ./
COPY tslint.json ./

COPY src /app/src

ENV APP_ENV ${APP_ENV}

RUN npm install
RUN npm install -g tslint typescript
RUN npm run build

CMD ["node", "./dist/app.js"]

EXPOSE ${APP_EXPOSED_PORT}