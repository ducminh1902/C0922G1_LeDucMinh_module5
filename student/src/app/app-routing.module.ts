import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentComponent} from "./component/student/student.component";
import {StudentCreateComponent} from "./component/student-create/student-create.component";
import {StudentUpdateComponent} from "./component/student-update/student-update.component";


const routes: Routes = [
  {path:'student',component:StudentComponent},
  {path:'student/create',component:StudentCreateComponent},
  {path:'student/update/:id',component:StudentUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
