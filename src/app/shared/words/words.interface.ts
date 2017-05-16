import { AddWordModel } from './../models/add-word.model';
import { Observable } from 'rxjs';
import { Word } from '../models/word.model';

export interface WordsInterface {

  /**
   * Keresés megvalósítása.
   * @param word keresett szó
   * @param from nyelv amin keresett szó be lett gépelve
   * @param to nyelv amin szeretnénk megtalálni
   * @return null ha a keresett szó nem található, különben a szó
   */
  search(word: string): Observable<Array<Word>>

  /**
   * Szó hozzáadása.
   * @param en angolul a szó
   * @param hu magyarul a szó
   * @return true ha a keresett szó megtalálható, false, ha nem.
   */
  addWord(en: string, hu: string): boolean

  /**
   * Szavak hozzáadása.
   * @param en angolul a szó
   * @param hu magyarul a szó
   * @return true ha a keresett szó megtalálható, false, ha nem.
   */
  addWordList(word: Array<AddWordModel>): boolean

  /**
   * Adott szó törlése.
   * @param word a törölni kívánt szó.
   * @param lang a törölni kívánt szó nyelve
   * @return törlés sikeressége.
   */
  deleteWord(word: string, lang: string): boolean
}
