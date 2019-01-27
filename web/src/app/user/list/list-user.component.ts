import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'list-user',
  templateUrl: './list-user.component.html',
  styles: ['./list-user.component.css']
})
export class ListComponent implements OnInit {

  users: User[];

  constructor(private router: Router, private userService: UserService) {

  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe( (data :any) => {
        this.users = data.result;
      });
  };

  deleteUser(user: User): void {
    this.userService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

  viewUser(user: User) : void {
    this.router.navigate(['/users/view', user.id]);
  }

}


