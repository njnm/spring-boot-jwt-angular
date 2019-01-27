import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UserComponent } from './user.component';
import { ListComponent } from './list/list-user.component';
import { AddUserComponent } from './add/add-user.component';
import { UserService } from './user.service';
import { UserRoutingModule } from './user.routing';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view-user.component';



@NgModule({
  declarations: [
    UserComponent,
    ListComponent,
    AddUserComponent,
    ViewComponent
  ],
  imports: [
    UserRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [UserService],
})
export class UserModule { }
