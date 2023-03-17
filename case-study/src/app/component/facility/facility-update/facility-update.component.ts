import { Component, OnInit } from '@angular/core';
import {FacilityService} from "../../../service/facility/facility.service";
import {FacilityTypeService} from "../../../service/facility/facility-type.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable, Subscription} from "rxjs";
import {CustomerType} from "../../../model/customer/customer-type";
import {FacilityType} from "../../../model/facilty/facility-type";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-facility-update',
  templateUrl: './facility-update.component.html',
  styleUrls: ['./facility-update.component.css']
})
export class FacilityUpdateComponent implements OnInit {

   // @ts-ignore
  facilityTypes: FacilityType[] = this.getFacilityType();
   facilityForm : FormGroup = new FormGroup({
     id: new FormControl(),
     name: new FormControl(),
     area: new FormControl(),
     cost: new FormControl(),
     maxpeople: new FormControl(),
     standardRoom: new FormControl(),
     descriptionOtherConvenience: new FormControl(),
     poolArea: new FormControl(),
     numberOfFloor: new FormControl(),
     facilityFree: new FormControl(),
     facilityType: new FormControl(),
   })

  constructor(private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private activatedRoute:ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
     this.activatedRoute.paramMap.subscribe(param =>{
       const id = parseInt(param.get('id'));
       this.facilityService.findById(id).subscribe(next =>{
         this.facilityForm.patchValue(next)
       })

     })
  }
update(){
     const facility = this.facilityForm.value;
     this.facilityService.updateFacility(facility.id,facility).subscribe(next =>{
       alert("cập nhật thành công");
       this.router.navigateByUrl('facility');
     })
}
getFacilityType(){
     this.facilityTypeService.getAll().subscribe(next => {
       this.facilityTypes = next;
     })
}
  comparaFn(o1: FacilityType, o2: FacilityType): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }
}
