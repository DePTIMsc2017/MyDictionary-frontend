import {Component, OnInit, Input,} from '@angular/core';
import { usersMock } from '../../shared/mock/users.mock';
import {LoginModel} from "../../shared/models/login.model";

@Component({
  selector: 'usermanagement',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users=usersMock;
  modify: boolean=true;
  index: number;
  selected: LoginModel[];
  modified: LoginModel[];

  constructor() { }

  ngOnInit() { }

  ngdelete(user){
console.log(user);

    this.users.splice(this.users.indexOf(user),1);
    this.index=-1;

}

ngBasic(){

}

ngEdit(user){
this.modify=false;
this.index=this.users.indexOf(user);

}

ngSave(us){
  console.log( );
  this.modify=true;
  this.index=100;

}

}
