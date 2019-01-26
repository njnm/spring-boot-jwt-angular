import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/list/user.component';
import {AddUserComponent} from './user/add/add-user.component';

const routes: Routes = [
  { path: 'users', loadChildren: "./user/user.module#UserModule" }
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
export class AppRoutingModule { }
