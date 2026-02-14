/* 
 lesson 1 : Basic pino logging

 this file covers: 
    - installation 
    - basic logger creation
    - log levels
    - structured logging
*/

import pino from "pino";
import dotenv from "dotenv";

dotenv.config();


// create a basic logger
const logger = pino();

// Log levels (from lowest to highest priority)
// trace: 10
// debug: 20
// info: 30 (default)
// warn: 40
// error: 50
// fatal: 60

logger.trace("this is a trace message");
logger.debug("this is a debug message");
logger.info("this is an info message");
logger.warn("this is a warning message");
logger.error("this is an error message");
logger.fatal("this is a fatal");


// structured logging (the right way)

// bad : string concatenation
logger.info("user logged in : " + 12345);

// good : structured data
const userId = 12345;
logger.info({ userId }, "user logged in ");

// more complex examples
logger.info({
    userId: 12345,
    email: "user@example.com",
    ip: "192.168.1.1",
    action: "login",
}, "user authenticated successfully");

// logging error properly 
const error = new Error("database connection failed");
logger.error({ err: error }, "failed database connection ");

// custom log levels
const customLogger = pino({
    level: "debug"
});

customLogger.debug("now debug message will show");
customLogger.trace('But trace still won\'t (still below debug)');


// environment based logging

const envlogger = pino({
    level: process.env.LOG_LEVEL || "trace",
    transport: {
        target: 'pino-pretty',
        options: { colorize: true }
    }
});

console.log("\n ==== Basic pino example ==== ");
envlogger.info({ example: "basic" }, "logger initialized ");




