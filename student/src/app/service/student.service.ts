import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../model/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private API = "http://localhost:3000/students";

  constructor(private httpClient: HttpClient) { }

  getAll():Observable<Student[]>{
    return this.httpClient.get<Student[]>(this.API)
  }

  delete(id: number):Observable<Student[]>{
    return this.httpClient.delete<Student[]>(this.API + '/' +id)
  }

  search(name: string):Observable<Student[]>{
    return  this.httpClient.get<Student[]>(this.API + '?name_like=' + name)
  }

  addStudent(student: Student):Observable<Student[]>{
    return this.httpClient.post<Student[]>(this.API,student)
  }

  findById(id: number):Observable<Student[]>{
    return this.httpClient.get<Student[]>(this.API+'/'+id)
  }

  updateStudent(id:number,student:Student):Observable<Student[]>{
    return this.httpClient.patch<Student[]>(this.API + '/' + id,student)
  }
}
