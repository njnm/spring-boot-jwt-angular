import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add/add-user.component';
import { UserComponent } from './list/user.component';


const routes: Routes = [
  { path: 'add', component: AddUserComponent },
  { path: 'list', component: UserComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class UserRoutingModule { }