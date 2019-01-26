import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from "@angular/common/http";
import { UserComponent } from './list/user.component';
import { AddUserComponent } from './add/add-user.component';
import { UserService } from './user.service';
import { UserRoutingModule } from './user.routing';


@NgModule({
  declarations: [
    UserComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    UserRoutingModule
  ],
  providers: [UserService],
})
export class UserModule { }