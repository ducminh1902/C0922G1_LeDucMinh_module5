import { Component, OnInit } from '@angular/core';
import {ClassType} from '../model/class-type';
import {StudentService} from '../service/student.service';
import {Router} from '@angular/router';
import {ClassService} from '../service/class.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
 classTypes: ClassType[] = [];

 studentForm: FormGroup = new FormGroup({
   id : new FormControl(),
   name : new FormControl(),
   gender : new FormControl(),
   email : new FormControl(),
   classType : new FormControl(),
 });
  constructor(private studentService: StudentService,
              private router: Router,
              private classService: ClassService) { }

  ngOnInit(): void {
    this.classService.getAll().subscribe(next => {
      this.classTypes = next;
    });
  }
  add() {
    const student = this.studentForm.value;
    this.studentService.saveStudent(student).subscribe(next => {
      this.studentForm.reset();
      this.router.navigateByUrl('student');
    });
  }
}
