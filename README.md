# react-redux-demo

React redux application demos.
This project uses some additional helpful libraries:

* Styled components
* Immutable.js
* Redux-saga
* Axios
* Jest

## Install

### Requirement

* Install Docker https://docs.docker.com/install/
* Install Yarn

### Setup for code commit

```
yarn install
```

### Setup for Development

Step 1: Buid dev image

```
docker build -t react-demo-dev-i -f dev.dockerfile .
```

Step 2: Run the image to start development

```
docker run --name react-demo-dev-app -p 3000:3000 -v <path/to/project>:/usr/src/app react-demo-dev-i
```

Open browser at localhost:3000 to view the app.

### Setup for Production

Step 1: Buid production image

```
docker build -t react-demo-prod-i .
```

Step 2: Run the image

```
docker run --name react-demo-prod-app -p 4000:80 react-demo-prod-i
```

Open browser at localhost:4000 to view the app.
