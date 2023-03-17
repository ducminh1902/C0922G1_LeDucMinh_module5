import { Component, OnInit } from '@angular/core';
import {CarService} from "../../service/car.service";
import {CarTypeService} from "../../service/car-type.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CarType} from "../../model/car-type";
import {FormControl, FormGroup} from "@angular/forms";
import {Car} from "../../model/car";

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {

  // @ts-ignore
  carTypes: CarType[]=this.getCarType();

  car: Car={};

  carForm: FormGroup=new FormGroup({
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
              private carTypeService:CarTypeService,
              private activatedRoute:ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param =>{
      const id = parseInt(param.get('id'));
      this.carService.findById(id).subscribe(next =>{
        this.carForm.patchValue(next);
      })
    })
  }


  getCarType(){
    this.carTypeService.getAll().subscribe(next =>{
      this.carTypes = next;
    })
  }

  updateCar(){
    const car = this.carForm.value;
    this.carService.update(car.id,car).subscribe(next =>{
      alert("đã cập nhật thành công");
      this.carForm.reset();
      this.router.navigateByUrl('car');
    })
  }

  comparaFn(o1: CarType, o2: CarType): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

}
