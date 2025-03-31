type LogContext = Record<string, unknown>;

export function logError(message: string, context?: LogContext) {
  console.error(`[ERROR] ${message}`, context ?? {});
}

export function logInfo(message: string, context?: LogContext) {
  console.info(`[INFO] ${message}`, context ?? {});
}
