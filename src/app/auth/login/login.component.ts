import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ngp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() login$ = new EventEmitter();

  ngOnInit(): void {
  }

}
