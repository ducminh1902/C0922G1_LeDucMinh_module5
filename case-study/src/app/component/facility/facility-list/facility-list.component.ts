import { Component, OnInit } from '@angular/core';
import {Facility} from "../../../model/facilty/facility";
import {FacilityService} from "../../../service/facility/facility.service";

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {


  facilities:Facility[]=[];

  item : Facility ={};

  constructor(private facilityService: FacilityService) { }

  ngOnInit(): void {
   this.getAll();
  }
   getAll(){
   this.facilityService.getAll().subscribe(next => {
     this.facilities = next
   })
   }

   delete(id: number){
    this.facilityService.deleteFacility(this.item.id).subscribe(next =>{
      alert("đã xóa thành công");
      this.ngOnInit();
    })
   }
}
