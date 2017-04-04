import { Component, OnInit } from '@angular/core';
import { usersMock } from  '../../shared/mock/users.mock';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  modify = false;
  passwordchange = false;
  pswdOk = true;
  actualUser =  {};
  tmpUser = {};
  currentUser;
  constructor() {


  let name= JSON.parse(localStorage.getItem('currentUser'));
  console.log(name);
  this.currentUser = usersMock.filter(data => {
      return data.username == name.username;
    });

  this.actualUser={
    birthdate: '1990.01.14.',
    country: 'Malaysia',
    city: 'Kuala Lumpur',
  };
  this.copy(this.tmpUser, this.actualUser);

  }

  copy(user1, user2)
  {
    user1.birthdate = user2.birthdate;
    user1.country = user2.country;
    user1.city = user2.city;
  }

  ngOnInit() { }

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
    console.log(pswd);
    if (pswd===""){
      alert("A jelszó mező üres");
      return;}
    if(pswd.length<5){
      alert("A jelszó legalább 5 karakter hosszúnak kell lennie");
      return;}

    if(!/^\w*$/.test(pswd)){
      alert("A jelszó csak számokat, kis- és nagy betűket tartalmazhat")
      return;
    }
    if(pswd===nickName){
      alert("A felhasználónév és a jelszó nem lehet ugyan az");
      return;
    }
    if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/.test(pswd) ){
      alert("A jelszónak tartalmaznia kell számot, kis- és nagy betűt");
      return;
    }

  }


  pswequal(ps1:any, ps2:any) {
    if (ps1 !== ps2) {
      alert("A két jelsző nem egyezik meg");
      return;
    }

  }


  onSubmit(values){

    console.log(this.actualUser);
    console.log(this.tmpUser);

    if(values.oldPswd === this.currentUser[0].password)
    {
      if(this.passwordchange)
      {
        this.currentUser[0].password = values.newPswd;
      }
      else {
      this.currentUser[0].username = values.username;
      this.actualUser['birthdate']= values.birthdate;
      this.currentUser[0].email = values.email;
      this.actualUser['country'] = values.country;
      this.actualUser['city'] = values.city;

      }
      this.tmpUser = this.actualUser;
    }
    else{
      console.log("NEM SIKERÜLT!");
      alert("Nem megfelelő jelszó!");
    }
    this.modify = false;
    this.passwordchange = false;
    localStorage.setItem('currentUser', JSON.stringify({username: this.currentUser[0].username, token: this.currentUser[0].token}));
    console.log("*************");
    console.log(usersMock);
    return;
  }

}
