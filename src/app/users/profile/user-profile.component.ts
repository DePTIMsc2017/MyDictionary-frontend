import { Component, OnInit } from '@angular/core';
import { usersMock } from  '../../shared/mock/users.mock';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  animations: [trigger(
    'onfail', [
      state('no_fail', style({opacity: 0})),
      state('has_fail', style({opacity: 1})),
      transition('has_fail => no_fail', animate('.5s')),
      transition('no_fail => has_fail', animate('.5s'))
    ]
  )]
})
export class UserProfileComponent implements OnInit {
  modify = false;
  passwordchange = false;
  tmpUser = {};
  currentUser;

  private _failExpression: string;
  private _passErr: boolean;
  private _errorMessage: string;
  constructor() {
    this._passErr = false;
    this._failExpression = 'no_fail';

  let name= sessionStorage.getItem('username');
  console.log(name);
  this.currentUser = usersMock.filter(data => {
      return data.username == name;
    });

  this.copy(this.tmpUser, this.currentUser[0]);

  }

  copy(user1, user2)
  {
    user1.username = user2.username;
    user1.email = user2.email;
    user1.password = user2.password;
    user1.birthdate = user2.birthdate;
    user1.country = user2.country;
    user1.city = user2.city;
  }

  ngOnInit() {

  }

  onChangeMod(Loginform){
    console.log(Loginform);
    console.log(Loginform.form.controls.username);
    //Loginform.form.controls['username'].setValue(this.actualUser['username']);
    this.modify=!this.modify;
    this.passwordchange = false;
  }

  onPasswordChangeMod(){
    this.passwordchange=!this.passwordchange;
    this.modify = false;
  }

  confirm(pswd:any, nickName:any){
    this._passErr = false;
    this._errorMessage = undefined;
    this._failExpression = 'no_fail';
    console.log(pswd);
    if (pswd===""){
      this._passErr = true;
      this._errorMessage = 'register.empty';
      this._failExpression = 'has_fail';
      return;}
    if(pswd.length<5){
      this._passErr = true;
      this._errorMessage = 'register.length';
      this._failExpression = 'has_fail';
      return;}

    if(!/^\w*$/.test(pswd)){
      this._passErr = true;
      this._errorMessage = 'register.justalphanum';
      this._failExpression = 'has_fail';
      return;
    }
    if(pswd===nickName){
      this._passErr = true;
      this._errorMessage = 'register.same';
      this._failExpression = 'has_fail';
      return;
    }
    if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/.test(pswd) ){
      this._passErr = true;
      this._errorMessage = 'register.alphanum';
      this._failExpression = 'has_fail';
      return;
    }

  }


  pswequal(ps1:any, ps2:any) {
    if (ps1 !== ps2) {
      this._passErr = true;
      this._errorMessage = 'register.notsame';
      this._failExpression = 'has_fail';
      return;
    }

  }


  onSubmit(values){

    if(values.oldPswd === this.currentUser[0].password)
    {
      if(this.passwordchange)
      {
        if(values.newPswd != "")
          this.currentUser[0].password = values.newPswd;
        else
          alert("Nem sikerült a módosítás!");
      }
      else {
        if(values.birthdate != "" && values.email != "" && values.country != "" && values.city !="") {
          this.currentUser[0].birthdate = values.birthdate;
          this.currentUser[0].email = values.email;
          this.currentUser[0].country = values.country;
          this.currentUser[0].city = values.city;
        }
        else
          alert("Nem sikerült a módosítás!");
      }

      alert("Sikeres módosítás!");
    }
    else{
      alert("Nem sikerült a módosítás!");
  }
    this.tmpUser = this.currentUser[0];
    this.modify = false;
    this.passwordchange = false;
    this._passErr = false;
    this._errorMessage = undefined;
    this._failExpression = 'no_fail';
    console.log("*************");
    console.log(usersMock);
    return;
  }

}
