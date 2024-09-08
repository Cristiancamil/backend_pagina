import { getDate, getHours, getMinutes, getMonth, getYear } from 'date-fns';

export const tokenExp = (exp: number): boolean => {
  const expDate = new Date(exp * 1000);
  const currentDate = new Date();
  const tenMinutesFromNow = new Date(currentDate.getTime() + 10 * 60 * 1000);
  return expDate < tenMinutesFromNow;
};

export const isISOString = (value) => {
  const isoRegex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}).(\d{3})Z$/;
  return isoRegex.test(value);
};

export const extractDateComponents = (date: Date) => {
  const year = getYear(date).toString();
  const month = (getMonth(date) + 1).toString();
  const day = getDate(date).toString();
  const hours = getHours(date);
  const minutes = getMinutes(date);

  return {
    year,
    month,
    day,
    time: `${padNumber(hours)}:${padNumber(minutes)}`,
  };
};

const padNumber = (number: number): string => {
  return number < 10 ? `0${number}` : number.toString();
};
