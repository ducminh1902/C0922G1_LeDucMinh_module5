import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Shoes} from '../model/shoes';

@Injectable({
  providedIn: 'root'
})
export class ShoesTypeService {
  private API = 'http://localhost:3000/shoesTypes';

  constructor(private httpClient: HttpClient) {
  }
  getAll(): Observable<Shoes[]> {
    return this.httpClient.get<Shoes[]>(this.API);
  }
}
