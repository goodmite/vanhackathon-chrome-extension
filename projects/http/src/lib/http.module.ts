import { NgModule } from '@angular/core';
import { HttpComponent } from './http.component';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [HttpComponent],
  imports: [
    HttpClientModule
  ],
  exports: [HttpComponent]
})
export class HttpModule { }
