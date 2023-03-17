import { Component, OnInit } from '@angular/core';
import {CarService} from "../../service/car.service";
import {Car} from "../../model/car";
import {Router} from "@angular/router";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  listCars: Car[]=[];

  item: Car={};

  constructor(private carService: CarService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.carService.getAll().subscribe(next =>{
      this.listCars=next['content'];
      console.log(next)
    })
  }

  deleteCar(id: number){
    this.carService.delete(this.item.id).subscribe(next =>{
      alert("Đã Xóa Thành Công");
     this.ngOnInit();
    })
  }

}
