import { Component, OnInit } from '@angular/core';
import {Customer} from "../../../model/customer/customer";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

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

  ngOnInit(): void {
  }

}
