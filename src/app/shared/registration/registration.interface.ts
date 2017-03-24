import { RegistrationModel } from '../models/registration.model';
export interface RegistrationInterface {
  /**
   * A regisztrációt megvalósító művelet. Innen hívjuk meg a backend regisztrációs api-t, és itt dolgozzuk fel,
   * hogy sikeresa kérés vagy sem.
   * @param user A regisztrációs formból.
   * @return True ha a regisztráció sikeres, false különben.
   */
  register(user: RegistrationModel): boolean;

  /**
   * A felhasználó törlése.
   * @param username Felhasználónév.
   * @return True ha sikeres, különben hamis.
   */
  deleteAccount(username: string): boolean;
}
