import {Component, OnInit} from '@angular/core';
import {usersMock} from  '../../shared/mock/users.mock';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Router} from "@angular/router";
import {Http, Headers} from '@angular/http';
import {MDHTTP} from '../../shared/MDHTTP';
import endpoints from '../../shared/api.endpoints';
import {UserModel} from "../../shared/models/user.model";

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
  tmpUser: UserModel = new UserModel();
  currentUser: UserModel = new UserModel();
  validPswd: boolean = true;
  userDTO: any;

  private _failExpression: string;
  private _passErr: boolean;
  private _errorMessage: string;

  constructor(private router: Router, private mdhttp: MDHTTP) {
    /*
    this._passErr = false;
    this._failExpression = 'no_fail';
    this.currentUser.username="";
    this.currentUser.birthdate="";
    this.currentUser.city="";
    this.currentUser.country="";
    this.currentUser.email="";
    this.tmpUser.username="";
    this.tmpUser.birthdate="";
    this.tmpUser.city="";
    this.tmpUser.country="";
    this.tmpUser.email="";
    */
   // let name = sessionStorage.getItem('currentUser');
    //this.currentUser = usersMock.filter(data => {
    //  return data.username == name;
   // });
   // console.log(sessionStorage);
    // this.copy(this.tmpUser, this.currentUser[0]);

  }

  copy(user1, user2) {
    user1.username = user2.username;
    user1.email = user2.email;
    user1.password = user2.password;
    user1.birthdate = user2.birthdate;
    user1.country = user2.country;
    user1.city = user2.city;
  }

  ngOnInit() {
    let name = sessionStorage.getItem("currentUser");

    this.mdhttp.get(`${endpoints.USER}?username=${name}`)
      .map(data => data.json())
      .subscribe(user => {
        this.userDTO = user;
          console.log(user);
          this.currentUser.username = user['username'];
          this.currentUser.email = user['email'];
          this.currentUser.birthdate = user['birthDate'];
          this.currentUser.country = user['country'];
          this.currentUser.city = user['city'];
          this.copy(this.tmpUser, this.currentUser);
        },
        error => {
          console.log("HIBA");
          //this._authenticateError.next(true);
          //this._loggedIn.next(false);
        });
  }

  onChangeMod(Loginform) {
    this.validPswd = true;
    //console.log(Loginform);
    //console.log(Loginform.form.controls.username);
    //Loginform.form.controls['username'].setValue(this.actualUser['username']);
    this.modify = !this.modify;
    this.passwordchange = false;
  }

  onPasswordChangeMod() {
    this.validPswd = false;
    this.passwordchange = !this.passwordchange;
    this.modify = false;
  }

  confirm(pswd: any, pswdA: any, nickName: any) {
    this._passErr = false;
    this._errorMessage = undefined;
    this._failExpression = 'no_fail';
    let result = this.checkPswd(pswd, nickName);
    console.log(pswd);
    if (result !== 'OK') {
      this._passErr = true;
      this._errorMessage = result;
      this._failExpression = 'has_fail';
      this.validPswd = false;
    }
    else if (pswdA != undefined) {
      this.validPswd = false;
    }
    else {
      this.validPswd = true;
    }

    console.log("AAABBB " + pswd + "  " + pswdA);

  }

  checkPswd(pswd: any, nickName: any) {
    if (pswd === "") {
      return 'register.empty';
    }
    if (pswd.length < 5) {
      return 'register.length';
    }

    if (!/^\w*$/.test(pswd)) {
      return 'register.justalphanum';
    }
    if (pswd === nickName) {
      return 'register.same';
    }
    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/.test(pswd)) {
      return 'register.alphanum';
    }
    return 'OK';
  }


  pswequal(ps1: any, ps2: any) {
    if (ps1 !== ps2) {
      this._passErr = true;
      this._errorMessage = 'register.notsame';
      this._failExpression = 'has_fail';
      this.validPswd = false;
      return;
    }
    else {
      this.validPswd = true;
    }

  }


  onSubmit(values) {
    let newp = values.newPswd;
    if(this.passwordchange) {
      this.mdhttp.post(endpoints.CHANGEPASSWORD, { "id":this.userDTO.id, "newPassword": newp, "oldPassword": values.oldPswd} )
        .subscribe(data => {
            sessionStorage.setItem('id-token', data.headers.get('X-AUTH-TOKEN'));
            sessionStorage.setItem("isCorrectprofilemodify", 'true');
            this.router.navigate(['admin/userprofilesuccess']);
            //console.log(data);
          },
          error => {
            console.log("HIBA");
            sessionStorage.setItem("isCorrectprofilemodify", 'false');
            this.router.navigate(['admin/userprofilesuccess']);
          });

    }
    else{
      this.userDTO['email'] = this.tmpUser.email;
      this.userDTO['country'] = this.tmpUser.country;
      this.userDTO['city'] = this.tmpUser.city;
      this.userDTO['birthDate'] = this.tmpUser.birthdate;

      let obj = Object.assign(this.userDTO, {"currentPassword": values.oldPswd });
      console.log(obj);
      this.mdhttp.post(endpoints.MODIFY_USER, obj  )
        .subscribe(data => {
          sessionStorage.setItem('id-token', data.headers.get('X-AUTH-TOKEN'));
          sessionStorage.setItem("isCorrectprofilemodify", 'true');
          this.router.navigate(['admin/userprofilesuccess']);
          //console.log(data);
        },
          error => {
            console.log("HIBA");
            sessionStorage.setItem("isCorrectprofilemodify", 'false');
            this.router.navigate(['admin/userprofilesuccess']);
          });
    }






    /*
    if (values.oldPswd === this.currentUser[0].password) {
      if (this.passwordchange) {
        if (this.checkPswd(values.newPswd, this.currentUser[0].username) == 'OK') {
          this.currentUser[0].password = values.newPswd;
          sessionStorage.setItem("isCorrectprofilemodify", 'true');
          this.router.navigate(['admin/userprofilesuccess']);
        }
        else
          sessionStorage.setItem("isCorrectprofilemodify", 'false');
        this.router.navigate(['admin/userprofilesuccess']);
      }
      else {
        if (values.birthdate != "" && values.email != "" && values.country != "" && values.city != "") {
          this.currentUser[0].birthdate = values.birthdate;
          this.currentUser[0].email = values.email;
          this.currentUser[0].country = values.country;
          this.currentUser[0].city = values.city;
          sessionStorage.setItem("isCorrectprofilemodify", 'true');
          this.router.navigate(['admin/userprofilesuccess']);
        }
        else
          sessionStorage.setItem("isCorrectprofilemodify", 'false');
        this.router.navigate(['admin/userprofilesuccess']);
      }
    }
    else {
      sessionStorage.setItem("isCorrectprofilemodify", 'false');
      this.router.navigate(['admin/userprofilesuccess']);
    }
    */
    this.copy(this.currentUser, this.tmpUser);
    //this.tmpUser = Object.assign({}, this.currentUser[0]); //this.currentUser[0].;
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
