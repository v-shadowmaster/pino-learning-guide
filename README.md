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

## Run the complete 
``` bash
# development mode (with pretty printing)
npm run dev

# production node (JSON output)
npm start
```
## Learning Path
### follow these files in order to master pino

Day 1: Fundamentals

✅ 01-basic-pino.js - Understanding log levels and structured logging  
✅ 02-logger-config.js - Development vs Production configuration

Day 2: Express Integration  

✅ 03-express-integration.js - Automatic request logging with pino-http  
✅ complete-example.js - Full production-ready Express app

Day 3: Advanced Features  

✅ 04-advanced-features.js - Child loggers, serializers, redaction  
✅ 06-best-practices.js - Common patterns and anti-patterns

Day 4: Production & Monitoring  

✅ 05-production-setup.js - Cloud deployment and monitoring tools  

## File Guide 
### Core Learning Files


| File | Purpose | Key Topics |
|------|---------|------------|
| `01-basic-pino.js` | Basics | Log levels, structured logging |
| `02-logger-config.js` | Configuration | Dev/prod setup, pretty printing |
| `03-express-integration.js` | Express | pino-http, request logging |
| `04-advanced-features.js` | Advanced | Child loggers, serializers, redaction |
| `05-production-setup.js` | Production | Cloud integration, monitoring |
| `06-best-practices.js` | Patterns | Do's/Don'ts, performance |
| `complete-example.js` | Reference | Full production app |

