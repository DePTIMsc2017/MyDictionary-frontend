import { RegistrationModel } from '../models/registration.model';

export let usersMock: Array<RegistrationModel> = [
  {
    username: 'Test',
    email: 'teszt@teszt.hu',
    password: 'Test123',
    birthdate: '1990.01.14.',
    country: 'Malaysia',
    city: 'Kuala Lumpur'
  },
  {
    username: 'admin',
    email: 'admin@admin.hu',
    password: 'Test123',
    birthdate: '1994.08.02.',
    country: 'Canada',
    city: 'Montreal'
  }
];
