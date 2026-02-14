/**
 *  Lesson 2 : Development vs Production configuration
 *  
 *  this file covers : 
 *      - pretty printing for development
 *      - JSON output for production 
 *      - configuration best practices
 */

import pino from "pino";
import dotenv from "dotenv";

dotenv.config();

// development logger setup -> pino pretty
// install : npm install pino-pritty

const devLogger = pino({
    transport: {
        target: "pino-pretty",
        options: {
            colorize: true,
            translateTime: "HH:MM:ss Z",
            ignore: "pid, hostname"
        }
    }
});

// production logger (json)

const prodLogger = pino({
    level: "info",
    timestamp: pino.stdTimeFunctions.isoTime
});

// smart configuration (recommended)

function createLogger() {
    const isDevelopment = process.env.NODE_ENV !== "production";

    const baseConfig = {
        level: process.env.LOG_LEVEL || (isDevelopment ? "debug" : "info"),

        // add useful context to every log
        base: {
            env: process.env.NODE_ENV || "development"
        }
    };

    // pretty print in development , JSON in production 
    if (isDevelopment) {
        return pino({
            ...baseConfig,
            transport: {
                target: "pino-pretty",
                options: {
                    colorize: true,
                    translateTime: 'yyyy-mm-dd HH:MM:ss',
                    ignore: 'pid,hostname'
                }
            }
        })
    }

    return pino(baseConfig);
}

export const logger = createLogger();

logger.info({ userId: 123, action: 'signup' }, 'New user registered');
logger.debug({ query: 'SELECT * FROM users' }, 'Database query executed');
logger.warn({
    cpu: 85,
    memory: 78
}, 'High resource usage detected');
logger.error({
    err: new Error('Payment gateway timeout'),
    orderId: 'ORD-12345'
}, 'Payment processing failed');

// export for use in other files

