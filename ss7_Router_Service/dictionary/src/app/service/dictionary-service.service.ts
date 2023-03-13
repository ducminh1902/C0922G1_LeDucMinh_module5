import {Injectable} from '@angular/core';
import {Dictionary} from '../dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {

  constructor() {
  }

  word: Dictionary[] = [{
    id: 1,
    vietNam: 'xin chào',
    english: 'hello'
  }, {
    id: 2,
    vietNam: 'tạm biệt',
    english: 'goodbye'
  }, {
    id: 3,
    vietNam: 'chúc ngủ ngon',
    english: 'goodnight'
  }, {
    id: 4,
    vietNam: 'chào buổi sáng',
    english: 'goodmorning'
  }];

  findAll(): Dictionary[] {
    return this.word;
  }

  // @ts-ignore
  findByVietNam(id: string): Dictionary {
    // tslint:disable-next-line:radix
    return  this.word.filter(it => it.id === parseInt(id))[0];
  }
}
