# Radio Réveil

## Installation
[...]

### Dev

Installer l'extension [Allow-Control-Allow-Origin: *](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi)
ou l'extension [CORS](https://chrome.google.com/webstore/detail/cors/dboaklophljenpcjkbbibpkbpbobnbld) 
sur Chrome 

### Prod
```
npm i -g http-server
npm i --only=prod

npm run build
cd dist && http-server
```