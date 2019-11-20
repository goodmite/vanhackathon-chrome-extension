import {EventEmitter, Injectable} from '@angular/core';
import {EPage} from '../typings/page';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  private pageChanged$ = new EventEmitter<EPage>();

  constructor() {
  }

  pageChanged(page: EPage) {
    this.pageChanged$.emit(page);
  }

  pageChangedNotifier() {
    return this.pageChanged$;
  }

}
