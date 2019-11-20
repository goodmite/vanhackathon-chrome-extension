import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormService} from '../../../../../form.service';

@Component({
  selector: 'ngp-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.scss']
})
export class CredentialsComponent implements OnInit {
  isVisible = false;
  credForm: FormGroup | undefined;

  constructor(private formService: FormService) {
  }

  ngOnInit() {
    this.credForm = this.formService.createPostForm();
  }

  showModal(): void {
    this.isVisible = true;
  }

  changePasswordFormSubmitted() {

  }

}
