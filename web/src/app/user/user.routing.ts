import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add/add-user.component';
import { ListComponent } from './list/list-user.component';
import { UserComponent } from './user.component';
import { ViewComponent } from './view/view-user.component';


const routes: Routes = [
  { path: '',
  component: UserComponent, 
  children: [
    { path: '', pathMatch: 'full', redirectTo: 'list' },
    { path: 'add', component: AddUserComponent },
    { path: 'list', component: ListComponent },
    { path: 'view/:id', component: ViewComponent }
  ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class UserRoutingModule { }
