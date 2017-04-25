import { Http } from '@angular/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

export function createTranslateLoader(http: Http): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function ngbDateStructToString(date: NgbDateStruct): string {
  let jsDate = new Date(date.year, date.month - 1, date.day);
  return moment(jsDate).format('YYYY-MM-DD');
}
