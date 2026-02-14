import pino from "pino";
const logger = pino();

logger.info({ userId: 123 }, 'User logged in');