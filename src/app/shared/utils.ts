import { Http } from '@angular/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: Http): TranslateHttpLoader {
  return new TranslateHttpLoader(http, 'src/public/i18n/', '.json');
}
