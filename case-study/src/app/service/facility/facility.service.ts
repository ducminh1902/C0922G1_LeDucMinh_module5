import { Injectable } from '@angular/core';
import {Facility} from "../../model/facilty/facility";

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  facilities:Facility[]=[{
    id:1,
    name:"Room Twin 01",
    area:100,
    cost:2.000,
    maxpeople:5,
    standardRoom:"vip1",
    descriptionOtherConvenience:"xe đạp, xe điện",
    poolArea:15,
    numberOfFloor:3,
    facilityFree:"buffet sáng"
  },{
    id:2,
    name:"Room Twin 02",
    area:120,
    cost:2.500,
    maxpeople:8,
    standardRoom:"vip2",
    descriptionOtherConvenience:"xe đạp, xe điện",
    poolArea:20,
    numberOfFloor:3,
    facilityFree:"buffet sáng"
  },{
    id:3,
    name:"Room Twin 03",
    area:150,
    cost:3.000,
    maxpeople:10,
    standardRoom:"vip3",
    descriptionOtherConvenience:"xe đạp, xe điện",
    poolArea:25,
    numberOfFloor:5,
    facilityFree:"buffet sáng"
  },
  ]
  constructor() {}

  getAll(){
    return this.facilities;
  }

  saveFacility(facility: Facility){
    const id = this.facilities.length+1;
    facility.id = id;
    this.facilities.push(facility);
  }

  findById(id: number){
    return this.getAll().find(item => item.id === id)
  }

  updateFacility(id: number,facility: Facility){
    for (let i = 0; i <this.facilities.length ; i++) {
      if (this.facilities[i].id == id){
        this.facilities[i] = facility;
        break;
      }
    }
  }
}
