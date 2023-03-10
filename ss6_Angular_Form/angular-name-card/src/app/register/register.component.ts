import { Component, OnInit } from '@angular/core';
import {Register} from 'ts-node';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   register: Register[] = [];
   infor = new FormControl();
  constructor() { }

  ngOnInit(): void {
  }

}
