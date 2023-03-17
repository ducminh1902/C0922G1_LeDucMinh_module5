import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Shoes} from '../model/shoes';

@Injectable({
  providedIn: 'root'
})
export class ShoesService {


  private API = '  http://localhost:3000/shoes';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Shoes[]> {
    return this.httpClient.get<Shoes[]>(this.API);
  }

  deleteShoes(id: number): Observable<Shoes[]> {
    return this.httpClient.delete<Shoes[]>(this.API + '/' + id);
  }

  addShoes(shoes: Shoes): Observable<Shoes[]> {
    return this.httpClient.post<Shoes[]>(this.API, shoes);
  }

  findByName(name: string): Observable<Shoes[]> {
    return this.httpClient.get<Shoes[]>(this.API + '?name_like=' + name);
  }

  findById(id: number): Observable<Shoes[]> {
    return this.httpClient.get<Shoes[]>(this.API + '/' + id);
  }

  updateShoes(id: number, shoes: Shoes): Observable<Shoes[]> {
    return this.httpClient.patch<Shoes[]>(this.API + '/' + id, shoes);
  }
}
