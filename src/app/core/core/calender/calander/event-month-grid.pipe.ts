import {Pipe, PipeTransform} from '@angular/core';
import {ICellData, IEvent} from '../../../../typings/event';
import {UtilityService} from '../../utility.service';

@Pipe({
  name: 'eventMonthGrid'
})
export class EventMonthGridPipe implements PipeTransform {

  transform(events: IEvent[], firstDayOfMonth: Date): ICellData[] {
    const arr = UtilityService.render(firstDayOfMonth);
    const cellData: ICellData[] = [];

    arr.forEach((day, index) => {
      cellData[index] = {} as any;
      cellData[index].date = day;
      if (firstDayOfMonth > day) {
        cellData[index].isPast = true;
      }
      if (!cellData[index].events) {
        cellData[index].events = [];
      }
      events.forEach((event) => {
        if (event.from) {
          if (UtilityService.isSameDay(new Date(event.from), day)) {
            cellData[index].events.push({...event, id: UtilityService.getRandomStr()});
          }
        }
      });
    });
    return cellData;
  }

}
