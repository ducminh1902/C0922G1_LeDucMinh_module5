import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShoesComponent} from './component/shoes/shoes.component';
import {ShoesCreateComponent} from './component/shoes-create/shoes-create.component';
import {ShoesUpdateComponent} from './component/shoes-update/shoes-update.component';


const routes: Routes = [
  {path: 'shoes', component: ShoesComponent},
  {path: 'shoes/create', component: ShoesCreateComponent},
  {path: 'shoes/update/:id', component: ShoesUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
