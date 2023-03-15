import { Injectable } from '@angular/core';
import {Facility} from "../../model/facilty/facility";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

 private API =" http://localhost:3000/facilities";

  constructor(private httpClient: HttpClient) {}

  // @ts-ignore
  getAll(): Observable<Facility[]>{
    return this.httpClient.get<Facility[]>(this.API)
  }

  deleteFacility(id: number): Observable<Facility>{
    return  this.httpClient.delete<Facility>(this.API + '/' +id)
  }

  addFacility(facility: Facility):Observable<Facility[]>{
    return this.httpClient.post<Facility[]>(this.API,facility)
  }

  findById(id: number):Observable<Facility[]>{
    return this.httpClient.get<Facility[]>(this.API + '/' +id)
  }

  updateFacility(id:number,facility:Facility):Observable<Facility[]>{
    return this.httpClient.patch<Facility[]>(this.API + '/' + id,facility)
  }
}
