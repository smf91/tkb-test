import { CustomValidators } from './../shared/custom.validators';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form: FormGroup
  currentView: string
  agree: boolean

  constructor(
  ) {
    this.form = new FormGroup({
      bik: new FormControl('', [
        Validators.required,
        CustomValidators.validateBik
      ]),
      account: new FormControl('', [
        Validators.required,
        CustomValidators.validateRs
      ]),
      agree: new FormControl(false)
    })
    this.currentView = 'checkAcc'
  }
  
  ngOnInit(): void {
  }

  iAgree() {
    this.agree = !this.agree
  }

  confirm(): void {
    alert('data is valid!')
  }
}


// валидные данные для проверки
// 044525225
// 30301810000006000001
