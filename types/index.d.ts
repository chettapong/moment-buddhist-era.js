declare module 'moment' {
  interface Moment extends Object {
    format(format?: string, options?: { be?: boolean }): string
  }
}