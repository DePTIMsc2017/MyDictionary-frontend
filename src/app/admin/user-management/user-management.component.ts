import {Component, OnInit, Input,} from '@angular/core';
import { usersMock } from '../../shared/mock/users.mock';

@Component({
  selector: 'usermanagement',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users=usersMock;

  constructor() { }

  ngOnInit() { }

}
