import pino from 'pino'
import expressPino from 'pino-http';

const loggerOptions = {
    logger: pino({
        transport: {
            target: 'pino-pretty',
            options: {
                colorize: true,
                destination: 1,
                all: true,
                translateTime: true
            }
        },
    }),
    serializers: {
        err: pino.stdSerializers.err,
        req: pino.stdSerializers.req,
        res: pino.stdSerializers.res
    },
    customLogLevel: (req, res, err) => {
        if (res.statusCode >= 400 && res.statusCode < 500) {
          return 'warn'
        } else if (res.statusCode >= 500 || err) {
          return 'error'
        } else if (res.statusCode >= 300 && res.statusCode < 400) {
          return 'silent'
        }
        return 'info'
    },
    customSuccessMessage: (req, res) => {
        if (res.statusCode === 404)
          return 'resource not found';
        return `${req.method} completed`;
    },
    customReceivedMessage: (req, res) => {
        return 'request received: ' + req.method
    },
    customErrorMessage: (req, res) => {
        return 'request errored with status code: ' + res.statusCode
    },
}

const logger = expressPino(loggerOptions);

export default logger;