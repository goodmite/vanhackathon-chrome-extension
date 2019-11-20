import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() {
  }

  static render(firstDateOfMonth: Date): Date[] {
    // let date = new Date(ms),
    const lastDayOfMonth = UtilityService.getLastDateOfMonth(firstDateOfMonth);
    const firstDate_Day = firstDateOfMonth.getDay();//0-6
    const lastDate_Date = lastDayOfMonth.getDate();//0-31
    const arr = [];
    for (let i = firstDate_Day; i > 0; --i) {
      arr.push(new Date(firstDateOfMonth.getTime() - i * 24 * 60 * 60 * 1000));
    }
    for (let i = 0; i < lastDate_Date; ++i) {
      arr.push(new Date(firstDateOfMonth.getTime() + i * 24 * 60 * 60 * 1000));
    }
    return arr;
  }

  /**
   * getFirstDateOfPrevMonth - given date of any month, it returns the first Date of previous month
   * @param {Date} date - Any Date of current month
   * */
  static getFirstDateOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() - 1, 1);
  }

  /**
   * getFirstDateOfNextMonth: given date of any month, it returns the first Date of next month
   * @param {Date} date - Any Date of current month
   * */
  static getFirstDateOfNextMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 1);
  }

  /**
   * getLastDateOfMonth: given date of any month, it returns the last Date of next month
   * @param {Date} date - date object
   * */
  static getLastDateOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
  }


  static isSameDay(d1: Date, d2: Date) {
    return d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate();
  }

  static getRandomStr(): string {
    return String(Date.now() + Math.floor(Math.random() * 1000000));
  }
}
