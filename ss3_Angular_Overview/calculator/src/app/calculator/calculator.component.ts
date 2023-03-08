// @ts-ignore
import {Component, OnInit} from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result = undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  sum(firstNumber: string, secondNumber: string) {
    debugger
    this.result = parseInt(firstNumber, 10) + parseInt(secondNumber, 10);
  }

  minus(firstNumber: string, secondNumber: string) {
    this.result=parseInt(firstNumber,10)-parseInt(secondNumber,10);
  }

  double(firstNumber: string, secondNumber: string) {
    this.result=parseInt(firstNumber,10)*parseInt(secondNumber,10);
  }

  division(firstNumber: string, secondNumber: string) {
    // @ts-ignore
    if (secondNumber == 0){
      document.write("lỗi chia cho 0 ");
    }else {
      this.result=parseInt(firstNumber,10)/parseInt(secondNumber,10);
    }
  }
}
