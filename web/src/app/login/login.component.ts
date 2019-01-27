import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from '../models/login-user.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginUser : LoginUser = new LoginUser();

  constructor(private router: Router, private loginService : LoginService) {

  }

  login(user) {
    this.loginService.login(user)
    .subscribe( (data : any) => {
      sessionStorage.setItem("employeeAppUser", JSON.stringify(data.result));
      this.router.navigate(['/users']);
    }, err =>{
      alert("Invalid credentials");
    });
  }


}
