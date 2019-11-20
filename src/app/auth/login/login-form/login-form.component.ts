import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ngp-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  validateForm: FormGroup | null;
  mode: 'signup' | 'login' = 'login';
  @Output() login$ = new EventEmitter();

  submitForm(): void {
    if (this.validateForm) {
      for (const i in this.validateForm.controls) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
      const {confirm_password, ...user} = this.validateForm.value;
      if (this.mode === 'login') {
        delete user.name;
      }
      this.login$.emit({user, action: this.mode});
    }
  }


  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: ['', [this.nameValidator]],
      email: ['', [Validators.required]],
      password: ['', [this.confirmPassValidator.bind(this, 'password')]],
      confirm_password: ['', [this.confirmPassValidator.bind(this, 'confirm_password')]]
    });
  }

  confirmPassValidator = (name: string, control: AbstractControl) => {
    const validateForm = this.validateForm;
    if (this.mode === 'signup') {
      if (!control.value && !control.value.trim()) {
        return {error: 'Please input Password!'};
      }
      if (name === 'confirm_password' && control.value !== validateForm.value.password) {
        return {error: 'Password Mismatch!'};
      }
    } else if (name === 'password') {
      if (!control.value && !control.value.trim()) {
        return {error: 'Please input confirm Password!'};
      }
    }
    return null;
  };

  nameValidator = (control: AbstractControl) => {


    if (this.mode === 'signup') {
      if (!control.value && !control.value.trim()) {
        return {error: 'Please input name!'};
      }
    }
    return null;
  };

  changeMode(mode) {

    this.mode = mode;
    if (this.validateForm) {
      (this.validateForm.get('name') as FormControl).updateValueAndValidity();
      (this.validateForm.get('confirm_password') as FormControl).updateValueAndValidity();
    }
  }


}
