import { Component, OnInit } from '@angular/core';
import {Contract} from "../../../model/contract/contract";

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {

  contracts:Contract[]=[{
    id:1,
    startDate:"1/1/2023",
    endDate:"6/1/2023",
    deposite:2.000,
  },{
    id:2,
    startDate:"2/1/2023",
    endDate:"9/1/2023",
    deposite:2.000
  },{
    id:3,
    startDate:"3/1/2023",
    endDate:"9/1/2023",
    deposite:2.000
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
