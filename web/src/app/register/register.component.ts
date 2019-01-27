import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user: User = new User();

  constructor(private router: Router, private registerService: RegisterService) {

  }

  createUser(): void {
    if(this.user.confPassword != this.user.password){
      alert("Passwords don't match");
      return;
    }else{
      delete this.user.confPassword;
    }
    this.registerService.register(this.user)
        .subscribe( data => {
          alert("User created successfully.");
          this.router.navigate(['/login']);
        });

  };


}
