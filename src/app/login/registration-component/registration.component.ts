import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ngbDateStructToString } from '../../shared/utils';
import { RegistrationService } from '../../shared/registration/registration.service';
import { RegistrationModel } from '../../shared/models/registration.model';

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
  private _usrErr: boolean;
  private _errorMessage: string;

  constructor(private registrationService: RegistrationService) { }

  ngOnInit() {
    this._passErr = false;
    this._usrErr = false;
    this._failExpression = 'no_fail';
  }

  register(form) {
    let submitUser: RegistrationModel = {
      username: form['nickName'],
      email: form['loginEmail'],
      password: form['loginPasswd'],
      birthdate: ngbDateStructToString(form['birthDate']),
      country: form['country'],
      city: form['city']
    };

    if (this.registrationService.register(submitUser)) {
      console.log('Success');
    } else {
      this._usrErr = true;
      this._errorMessage = 'Felhasználónév már foglalt!';
      this._failExpression = 'has_fail';
    }
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
