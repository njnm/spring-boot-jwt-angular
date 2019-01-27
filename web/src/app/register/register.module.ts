import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register.routing';
import { RegisterComponent } from './register.component';
import { RegisterService } from './register.service';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    RegisterRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [RegisterService],
})
export class RegisterModule { }
