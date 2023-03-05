# uwconnect-frontend

## Setup Guide

### Local Machine and MacOS / Linux

Get Node.js version management, e.g. https://github.com/tj/n


For Mac user to install
```shell
brew install n
```

If you are linux user
```shell
sudo apt-get install curl
curl -L https://bit.ly/n-install | bash
```

Or if you already have `npm` installed:
```shell
npm install -g n
```


To install specific version of node is easy
```shell
sudo n 18.14.2
sudo n run 18.14.2
```
or
```shell
sudo n 18.14.2
sudo n  #open an interactive shell to select version
```

Then to run the commend to start local server
```shell
rm -rf node_modules #remove node_modules if any
sudo npm install
sudo npm start
#^error might happen without sudo, at least it gives error on Mac
```

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
