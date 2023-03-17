import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CarType} from "../model/car-type";

@Injectable({
  providedIn: 'root'
})
export class CarTypeService {

  private API= "  http://localhost:3000/carTypes"

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<CarType[]>{
    return this.httpClient.get<CarType[]>(this.API)
  }
}
