import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', loadChildren: "./login/login.module#LoginModule" },
  { path: 'register', loadChildren: "./register/register.module#RegisterModule" },
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
