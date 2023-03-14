import { Component, OnInit } from '@angular/core';
import {Customer} from "../../../model/customer/customer";
import {CustomerService} from "../../../service/customer/customer.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  // @ts-ignore
  customers:Customer[]=[];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getAll();
  }
   getAll(){
   this.customers= this.customerService.getAll();
   }
}
