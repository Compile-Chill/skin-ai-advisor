import { LogLevel, Logger } from '@nestjs/common'

export function getLogLevels(): LogLevel[] {
  const logger = new Logger('getLogLevels')
  const logLevelConfig = Number.isNaN(Number(process.env.LOG_LEVEL)) ? 1 : parseInt(process.env.LOG_LEVEL as string, 10)

  const logLevels: LogLevel[] = ['log']

  switch (logLevelConfig) {
    case 2:
      logLevels.push('debug')
      logger.log('Log levels set to: log, debug')
      break
    case 3:
      logLevels.push('debug', 'error')
      logger.log('Log levels set to: log, debug, error')
      break
    default:
      logLevels.push('error')
      logger.log('Log levels set to: log, error')
  }

  logger.log(`Configured log level: ${JSON.stringify(logLevels, null, 2)}`)
  return logLevels
}