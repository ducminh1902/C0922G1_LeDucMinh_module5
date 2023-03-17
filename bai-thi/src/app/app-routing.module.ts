import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarComponent} from "./component/car/car.component";
import {CarUpdateComponent} from "./component/car-update/car-update.component";
import {CarCreateComponent} from "./component/car-create/car-create.component";


const routes: Routes = [
  {path:'car',component:CarComponent},
  {path:'car/create',component:CarCreateComponent},
  {path:'car/update/:id',component:CarUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
