import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  animations: [trigger(
    'onfail', [
      state('has_fail', style({opacity: 1})),
      state('no_fail', style({opacity: 0})),
      transition('* => *', animate('.5s'))
    ]
  )]
})
export class RegistrationComponent implements OnInit {

  private _failExpression: string;
  private _passErr: boolean;
  private _errorMessage: string;

  constructor() { }

  ngOnInit() {
    this._passErr = false;
    this._failExpression = 'no_fail';
  }

  register() {
    console.log('Register');
  }

  confirm(pswd:any, nickName:any){
    this._passErr = false;
    this._errorMessage = undefined;
    this._failExpression = 'no_fail';

    if (pswd === ''){
      this._passErr = true;
      this._errorMessage = 'A jelszó mező üres';
      this._failExpression = 'has_fail';
      return;
    }

    if(pswd.length < 5){
      this._passErr = true;
      this._errorMessage = 'A jelszó legalább 5 karakter hosszúnak kell lennie';
      this._failExpression = 'has_fail';
      return;
    }

    if(!/^\w*$/.test(pswd)){
      this._passErr = true;
      this._errorMessage = 'A jelszó csak számokat, kis- és nagy betűket tartalmazhat';
      this._failExpression = 'has_fail';
      return;
    }

    if(pswd === nickName){
      this._passErr = true;
      this._errorMessage = 'A felhasználónév és a jelszó nem lehet ugyan az';
      this._failExpression = 'has_fail';
      return;
    }

    if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/.test(pswd) ){
      this._passErr = true;
      this._errorMessage = 'A jelszónak tartalmaznia kell számot, kis- és nagy betűt';
      this._failExpression = 'has_fail';
      return;
    }
  }

  pswequal(ps1:any, ps2:any){
    this._passErr = false;
    this._errorMessage = undefined;
    this._failExpression = 'no_fail';

    if(ps1 !== ps2){
      this._passErr = true;
      this._errorMessage = 'A két jelszó nem egyezik meg!';
      this._failExpression = 'has_fail';
      return;
    }
  }
}
