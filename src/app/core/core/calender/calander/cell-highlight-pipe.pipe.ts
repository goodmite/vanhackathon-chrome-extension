import {Pipe, PipeTransform} from '@angular/core';
import {ICellData, IEvent} from '../../../../typings/event';
import {UtilityService} from '../../utility.service';

@Pipe({
  name: 'cellHighlightPipe'
})
export class CellHighlightPipePipe implements PipeTransform {

  transform(cellData: ICellData, event: IEvent): any {
    if (event && event.from && event.to) {
      if (UtilityService.isSameDay(event.from, cellData.date) || UtilityService.isSameDay(event.to, cellData.date)) {
        return true;
      }
      return event.from.getTime() <= cellData.date.getTime() && cellData.date.getTime() <= event.to.getTime();
    }
    return false;
  }

}
