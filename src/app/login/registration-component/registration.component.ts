import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    register() {
      console.log('Register');
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
  pswequal(ps1:any, ps2:any){
      if(ps1!==ps2){
        alert("A két jelsző nem egyezik meg");
        return;
      }

  }
}
