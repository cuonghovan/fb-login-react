# Stage 1 - the build process
FROM node:8.11.3

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn

COPY . ./

EXPOSE 3000

CMD [ "yarn", "dev" ]
