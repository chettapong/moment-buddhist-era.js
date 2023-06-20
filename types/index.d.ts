import * as moment from 'moment';

declare module "moment" {
  interface Moment {
    buddhistEra(): boolean
    buddhistEra(value: boolean): moment.Moment
    format(format?: string, options?: { be?: boolean }): string
  }
}
