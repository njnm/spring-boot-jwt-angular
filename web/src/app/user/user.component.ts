import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  title = "User App";

  constructor(private userService: UserService, private router : Router){

  }

  ngOnInit() {};

  logoutUser(){
    debugger;
    this.userService.logout().subscribe();
    sessionStorage.clear();
    this.router.navigate(["/login"]);
  }

}


