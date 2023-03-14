import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerService} from "../../../service/customer/customer.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customerForm: FormGroup;

  constructor(private customerService: CustomerService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = parseInt(paramMap.get('id'))
      const customer = this.customerService.findById(id);
      this.customerForm =new FormGroup({
        id: new FormControl(customer.id),
        name: new FormControl(customer.name),
        dateOfBirth: new FormControl(customer.dateOfBirth),
        gender: new FormControl(customer.gender),
        idCard: new FormControl(customer.idCard),
        phoneNumber:new FormControl(customer.phoneNumber),
        email:new FormControl(customer.email),
        address: new FormControl(customer.address)
      })
    })
  }

  update(){
    const customer = this.customerForm.value;
    this.customerService.updateCustomer(customer.id,customer);
    this.customerForm.reset();
    this.router.navigateByUrl("/customer");

  }
}
