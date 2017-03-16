export interface LoginInterface {
  /**
   * Belépést megvalósító metódus. Ha a belépés sikeres átírányít a főoldalra, különben valamilyen hibaüzenetet ad vissza.
   * @param user A login formtól kapott, a bejelentkezéshez szükséges információk.
   */
  login(user: LoginModel): string;

  /**
   * Username ellenörzése, hogy létezik-e vagy sem. Ha létezik igaz a visszatérési érték különben hamis.
   * @param username string, amely a klo
   */
  checkUserExist(username: string): boolean;

  /**
   * Ellenörzés, hogy user van e belépve. Ha igen igaz, különben hamis.
   */
  isLoggedIn(): boolean;

  /**
   * Aktuális user kiléptetése. Ha sikeres a kijelentkezés, akkor navigálás a főoldalra, különben hibaüzenet
   */
  logout(): string;
}
