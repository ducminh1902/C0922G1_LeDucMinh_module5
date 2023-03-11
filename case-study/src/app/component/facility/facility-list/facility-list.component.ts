import { Component, OnInit } from '@angular/core';
import {Facility} from "../../../model/facilty/facility";

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {

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
  constructor() { }

  ngOnInit(): void {
  }

}
