import {Component, OnInit} from '@angular/core';
import {Student} from '../model/student';
import {StudentService} from '../service/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  // idDelete: number;
  // deleteStudent: Student;
  item: Student = {};

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.studentService.getAll().subscribe(next => {
      console.log(next);
      this.students = next;
    });
  }



  delete(id: number) {
    this.studentService.deleteStudent(this.item.id).subscribe(next => {
      alert('xóa thành công');
      this.ngOnInit();
    });
  }
}
