import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../service/student.service";
import {Student} from "../../model/student";
import {Router} from "@angular/router";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: Student[]=[];

  item: Student ={};

  page = 0;

  constructor(private studentService: StudentService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAll()
  }
 getAll(){
    this.studentService.getAll().subscribe(next =>{
      this.students = next;
    })
 }

 delete(id: number){
    this.studentService.delete(id).subscribe(next =>{
      alert("đã xóa thành công");
      this.ngOnInit();
    })
 }

 search(name: string){
    this.studentService.search(name).subscribe(next => {
      this.students = next;
    })
 }
}
