import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private API = 'http://localhost:3000/students';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.API);
  }

  saveStudent(student): Observable<Student[]> {
    // @ts-ignore
    return this.httpClient.post<>(this.API, student);
  }

  deleteStudent(id: number): Observable<Student[]> {
    // @ts-ignore
    return this.httpClient.delete(this.API + '/' + id);
  }

  findById(id: number): Observable<Student> {
    return this.httpClient.get<Student>(this.API + '/' + id);
  }
}
