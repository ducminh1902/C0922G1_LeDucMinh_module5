import {Component, OnInit} from '@angular/core';
import {Register} from 'ts-node';
import {AbstractControl, FormControl, FormGroup, FormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  rfRegister: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    this.rfRegister = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$\n')]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassWord: new FormControl('', [Validators.required, Validators.minLength(6)]),
      country: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$\n')])
    });

  }

// // password phải giống confirmPassword
//   checkPassword(control : AbstractControl){
//     c confirmPassword= control.value;
//     if (confirmPassword  ){
//
//     }
//   }
}
