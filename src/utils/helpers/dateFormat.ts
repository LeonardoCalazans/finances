import moment from 'moment';

export const ISO_DATE = 'YYYY-MM-DDTHH:mm:ss';
export const SHORT_DATE = 'DD/MM/YYYY';

const dateFormat = (
    date: Date | moment.Moment | string,
    format?: string,
  ): string => moment(date, format || ISO_DATE).format(SHORT_DATE);

export default dateFormat;
