import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FacilityType} from "../../model/facilty/facility-type";

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {
  private API = " http://localhost:3000/facilityTypes";

  constructor(private httpClient: HttpClient) { }

  getAll():Observable<FacilityType[]>{
    return this.httpClient.get<FacilityType[]>(this.API)
  }
}
