import * as moment from 'moment';

declare module "moment" {
  interface Moment {
    format(format?: string, options?: { be?: boolean }): string
  }

  export function buddhistEra(): boolean
  export function buddhistEra(value: boolean): moment.Moment
}
