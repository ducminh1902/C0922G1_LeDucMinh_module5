import { Component, OnInit } from '@angular/core';
import {FacilityService} from "../../../service/facility/facility.service";
import {FacilityTypeService} from "../../../service/facility/facility-type.service";
import {Router} from "@angular/router";
import {FacilityType} from "../../../model/facilty/facility-type";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {

  facilityTypes: FacilityType[]=[];

  facilityForm: FormGroup = new FormGroup({
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
              private router: Router) { }

  ngOnInit(): void {
    this.facilityTypeService.getAll().subscribe(next =>{
      this.facilityTypes = next;
    })
  }
add(){
    const facility = this.facilityForm.value;
    this.facilityService.addFacility(facility).subscribe(next =>{
      alert("thêm thành công");
      this.facilityForm.reset();
      this.router.navigateByUrl('facility')
    })
}
}
