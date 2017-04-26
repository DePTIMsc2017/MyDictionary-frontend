import { Injectable } from '@angular/core';
import { RegistrationInterface } from './registration.interface';
import { RegistrationModel } from '../models/registration.model';
import { usersMock } from '../mock/users.mock';

@Injectable()
export class RegistrationService implements RegistrationInterface{

  register(user: RegistrationModel): boolean {
    let userExists = usersMock.filter(data => user.username === data.username);

    if (userExists.length !== 0) {
      return false;
    }

    usersMock.push(user);

    console.log(usersMock);
    return true;
  }

  deleteAccount(username: string): boolean {
    let index = usersMock.findIndex(data => data.username === username);

    if (index === -1) {
      return false;
    }

    usersMock.splice(index, index+1);

    return true;
  }

}
