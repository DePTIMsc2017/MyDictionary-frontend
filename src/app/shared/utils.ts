import { TranslateStaticLoader } from 'ng2-translate';
import { Http } from '@angular/http';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, 'src/public/i18n', '.json');
}
