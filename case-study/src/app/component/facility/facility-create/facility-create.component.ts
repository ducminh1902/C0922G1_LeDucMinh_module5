import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FacilityService} from "../../../service/facility/facility.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {

  facilityForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    area: new FormControl(),
    cost: new FormControl(),
    maxPeople: new FormControl(),
    standardRoom: new FormControl(),
    descriptionOtherConvenience: new FormControl(),
    poolArea: new FormControl(),
    numberOfFloor: new FormControl(),
    facilityFree: new FormControl(),
  })

  constructor(private facilityService: FacilityService,
              private  router: Router) { }

  ngOnInit(): void {
  }

  add(){
    const facility = this.facilityForm.value;
    this.facilityService.saveFacility(facility);
    this.facilityForm.reset();
    this.router.navigateByUrl('/facility')
  }
}
