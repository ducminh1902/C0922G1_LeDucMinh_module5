import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerService} from "../../service/customer/customer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerTypeService} from "../../service/customer/customer-type.service";
import {CustomerType} from "../../model/customer/customer-type";
import {Observable} from "rxjs";

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
    customerTypes: Observable<CustomerType[]>=this.customerTypeService.getAll();
  customerForm: FormGroup=new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    dateOfBirth: new FormControl(),
    gender: new FormControl(),
    idCard: new FormControl(),
    phoneNumber: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),
    customerType: new FormControl(),
  })
  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private customerTypeService: CustomerTypeService,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param=>{
      const  id = parseInt(param.get('id'))
      this.customerService.findById(id).subscribe(next => {
        this.customerForm.patchValue(next)
      })
    })
  }

  update(){
    const  customer = this.customerForm.value;
    this.customerService.updateCustomer(customer.id,customer).subscribe(next =>{
      alert("đã cập nhật thành công");
      this.customerForm.reset();
      this.router.navigateByUrl('customer');
    })
  }

}
