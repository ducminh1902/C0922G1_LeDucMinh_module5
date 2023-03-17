import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../service/student.service";
import {StudentType} from "../../model/student-type";
import {Router} from "@angular/router";
import {StudentTypeService} from "../../service/student-type.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  studentTypes: StudentType[]=[];

  studentForm:FormGroup=new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    gender: new FormControl(),
    email: new FormControl(),
    studentType: new FormControl(),
  })

  constructor(private studentService: StudentService,
              private studentTypeService: StudentTypeService,
              private router: Router) { }

  ngOnInit(): void {
    this.studentTypeService.getAll().subscribe(next =>{
      this.studentTypes =next;
    })
  }

  add(){
    const student = this.studentForm.value;
    this.studentService.addStudent(student).subscribe(next =>{
      alert("đã thêm thành công");
      this.studentForm.reset();
      this.router.navigateByUrl('student');
    })
  }

}
