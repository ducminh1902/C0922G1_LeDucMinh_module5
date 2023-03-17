import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car} from "../model/car";

@Injectable({
  providedIn: 'root'
})
export class CarService {
   private API =" http://localhost:8080/cars";

  constructor(private httpClient: HttpClient) { }

  // @ts-ignore

  getAll():Observable<Car[]>{
    return this.httpClient.get<Car[]>(this.API)
  }

  delete(id: number):Observable<Car[]>{
    return this.httpClient.delete<Car[]>(this.API + '/' + id)
  }

  findById(id: number):Observable<Car[]>{
    return this.httpClient.get<Car[]>(this.API + '/' + id)
  }

  update(id:number,car:Car):Observable<Car[]>{
    return this.httpClient.patch<Car[]>(this.API + '/'+id,car)
  }

  create(car: Car):Observable<Car[]>{
    return this.httpClient.post<Car[]>(this.API, car);
  }
}
