import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {StudentType} from "../model/student-type";

@Injectable({
  providedIn: 'root'
})
export class StudentTypeService {
  private API = "http://localhost:3000/studentTypes"

  constructor(private httpClient: HttpClient) { }

  getAll():Observable<StudentType[]>{
    return this.httpClient.get<StudentType[]>(this.API)
  }

}
