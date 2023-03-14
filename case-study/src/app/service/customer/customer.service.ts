import { Injectable } from '@angular/core';
import {Customer} from "../../model/customer/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customes:Customer[]=[{
    id:1,
    name:"Nguyễn Văn A",
    dateOfBirth:"20/3/2000",
    gender:1,
    idCard:"1234567",
    phoneNumber:"09012345678",
    email:"abcd123@gmail.com",
    address:"Đà Nẵng",
  },{
    id:2,
    name:"Nguyễn Văn B",
    dateOfBirth:"20/3/2000",
    gender:0,
    idCard:"1234567",
    phoneNumber:"09012345678",
    email:"abcd123@gmail.com",
    address:"Đà Nẵng",
  },{
    id:3,
    name:"Nguyễn Văn C",
    dateOfBirth:"20/3/2000",
    gender:1,
    idCard:"1234567",
    phoneNumber:"09012345678",
    email:"abcd123@gmail.com",
    address:"Đà Nẵng",
  },
  ]

  constructor() { }


  getAll(){
    return this.customes;
  }

  saveCustomer(customer: Customer){
    const id = this.customes.length+1;
    customer.id=id;
    this.customes.push(customer)
  }

  findById(id: number){
    return this.getAll().find(item => item.id === id);
  }

  updateCustomer(id: number,customer: Customer){
    for (let i = 0; i <this.customes.length ; i++) {
      if (this.customes[i].id == id){
        this.customes[i] =customer;
        break;
      }

    }
  }
}
