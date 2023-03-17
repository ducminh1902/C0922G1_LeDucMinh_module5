import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {StudentService} from "../../service/student.service";
import {StudentTypeService} from "../../service/student-type.service";
import {ActivatedRoute, Router} from "@angular/router";
import {StudentType} from "../../model/student-type";

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {

  // @ts-ignore
  studentTypes: StudentType[]= this.getStudentType();

  studentForm:FormGroup=new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    gender: new FormControl(),
    email: new FormControl(),
    studentType: new FormControl(),
  })

  constructor(private studentService: StudentService,
              private studentTypeService: StudentTypeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      const id = parseInt(param.get('id'))
       this.studentService.findById(id).subscribe(next =>{
         this.studentForm.patchValue(next);
       })
    })
  }

  getStudentType(){
    this.studentTypeService.getAll().subscribe(next =>{
      this.studentTypes = next;
    })
  }

  update(){
    const student = this.studentForm.value;
    this.studentService.updateStudent(student.id,student).subscribe(next =>{
      alert("cập nhật thành công");
      this.studentForm.reset();
      this.router.navigateByUrl('student');
    })
  }


  comparaFn(o1: StudentType, o2: StudentType): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }
}
