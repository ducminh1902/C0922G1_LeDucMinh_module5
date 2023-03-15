import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ClassType} from '../model/class-type';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private API = 'http://localhost:3000/classTypes';

  constructor(private httpClient: HttpClient) {
  }
   getAll(): Observable<ClassType[]> {
    return this.httpClient.get<ClassType[]>(this.API);
   }
}
