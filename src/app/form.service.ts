import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private formBuilder: FormBuilder) {
  }

  createPostForm(value: { title: string, text: string } = {text: '', title: ''}): FormGroup {
    return this.formBuilder.group({
      title: [value.title, Validators.required],
      text: [value.text, Validators.required],
    });
  }

  createChangePasswordForm() {
    return this.formBuilder.group({
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
    });
  }
}
