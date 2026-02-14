# pino-learning-guide 

## Quick start
``` bash
# initalize project
npm init -y

# install core dependencies
npm install express pino pino-http

# install development dependencies
npm install --save-dev pino-pretty nodemon
```

## Basic usage 
``` js
const pino = require("pino"); // if you are using common js
const logger = pino();

logger.info({userId : 123 } , "user logged in");
```