import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {FacilityService} from "../../../service/facility/facility.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {

  facilityForm : FormGroup;


  constructor(private facilityService: FacilityService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      const  id = parseInt(paramMap.get('id'));
      const  facility = this.facilityService.findById(id);
      this.facilityForm = new FormGroup({
        id : new FormControl(facility.id),
        name : new FormControl(facility.name),
        area : new FormControl(facility.area),
        cost : new FormControl(facility.cost),
        maxPeople : new FormControl(facility.maxpeople),
        standardRoom : new FormControl(facility.standardRoom),
        descriptionOtherConvenience : new FormControl(facility.descriptionOtherConvenience),
        poolArea : new FormControl(facility.poolArea),
        numberOfFloor : new FormControl(facility.numberOfFloor),
        facilityFree : new FormControl(facility.facilityFree),
      })
    })
  }

  update(){
    const facility = this.facilityForm.value;
    this.facilityService.updateFacility(facility.id,facility)
    this.facilityForm.reset();
    this.router.navigateByUrl('/facility')
  }
}
