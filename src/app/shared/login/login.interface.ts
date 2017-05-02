import { LoginModel } from '../models/login.model';

export interface LoginInterface {
  /**
   * Belépést megvalósító metódus. Ha a belépés sikeres átírányít a főoldalra, különben valamilyen hibaüzenetet ad vissza.
   * @param user A login formtól kapott, a bejelentkezéshez szükséges információk.
   */
  login(user: LoginModel): void;

  /**
   * Ellenörzés, hogy user van e belépve. Ha igen igaz, különben hamis.
   */
  isLoggedIn(): boolean;

  /**
   * Aktuális user kiléptetése. Ha sikeres a kijelentkezés, akkor navigálás a főoldalra, különben hibaüzenet
   */
  logout(): void;

  /**
   * Az akutális felhasználó nevének lekérdezése.
   */
  getActualUser(): string;
}
