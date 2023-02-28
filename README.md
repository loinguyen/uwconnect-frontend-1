# uwconnect-frontend

## Setup Guide

### *NodeJs and WSL2 Ubuntu*



To install the latest LTS version of NodeJs on WSL2 Ubuntu run the following command:

```shell
sudo apt-get install curl
```

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
```

```shell
nvm install --lts
```



### *How to Run React*



After Installing NodeJs. Navigate to your uwconnect frontend local repo and run the following command:

```shell
npm install
```

To run Reactjs app, run the following command:

```shell
npm start
```

### *Environment configuration*

create a .env in the same location as package.json

add the following line of code 

```shell
REACT_APP_API_LINK = your_api_link
```
npm start set environment to "development"

npm build set environment to "production"

the following file are priortize base on environment

npm start: .env.development.local, .env.local, .env.development, .env
npm run build: .env.production.local, .env.local, .env.production, .env
npm test: .env.test.local, .env.test, .env (note .env.local is missing)
