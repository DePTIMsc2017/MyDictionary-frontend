import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-profile-success',
  templateUrl: 'user-profile-success.html',
  styleUrls: ['user-profile-success.css']
})
export class UserProfileSuccess implements OnInit {
  isCorrect:boolean;
  constructor() { }


  ngOnInit() {
    if(sessionStorage.getItem("isCorrectprofilemodify")=="true")
      this.isCorrect=true;
    else
      this.isCorrect=false;


  }


}
