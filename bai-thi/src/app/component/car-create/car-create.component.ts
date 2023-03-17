import { Component, OnInit } from '@angular/core';
import {CarService} from "../../service/car.service";
import {CarTypeService} from "../../service/car-type.service";
import {Router} from "@angular/router";
import {CarType} from "../../model/car-type";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent implements OnInit {


   carTypes: CarType[];

   carForm: FormGroup = new FormGroup({
     id: new FormControl(),
     soXe: new FormControl(),
     tenNhaXe: new FormControl(),
     diemDi: new FormControl(),
     diemDen: new FormControl(),
     soDienThoai: new FormControl(),
     email: new FormControl(),
     gioDi: new FormControl(),
     gioDen: new FormControl(),
     carType: new FormControl(),
   })

  constructor(private carService: CarService,
              private carTypeService: CarTypeService,
              private router: Router) { }

  ngOnInit(): void {
  this.carTypeService.getAll().subscribe(next =>{
    this.carTypes = next;
  })
  }

  add(){
  const car = this.carForm.value;
  this.carService.create(car).subscribe(next => {
    alert("đã thêm thành công");
    this.carForm.reset();
    this.router.navigateByUrl('car');
  })
  }

}
