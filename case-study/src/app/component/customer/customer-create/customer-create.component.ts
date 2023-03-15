import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerService} from "../../../service/customer/customer.service";
import {Router} from "@angular/router";
import {CustomerTypeService} from "../../../service/customer/customer-type.service";
import {CustomerType} from "../../../model/customer/customer-type";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
   customerTypes: CustomerType[]=[];
  customerForm: FormGroup= new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    dateOfBirth: new FormControl(),
    gender: new FormControl(),
    idCard:new FormControl(),
    phoneNumber:new FormControl(),
    email:new FormControl(),
    address:new FormControl(),
    customerType:new FormControl(),
  })

  constructor(private customerService: CustomerService,
              private router: Router,
              private customerTypeService: CustomerTypeService) { }

  ngOnInit(): void {
    this.customerTypeService.getAll().subscribe(next => {
      this.customerTypes = next;
    })
  }

  add(){
    const customer = this.customerForm.value
    this.customerService.addCustomer(customer).subscribe(next => {
      this.customerForm.reset();
      this.router.navigateByUrl('customer');
      alert("đã thêm mới khách hàng");
    })
  }
}
