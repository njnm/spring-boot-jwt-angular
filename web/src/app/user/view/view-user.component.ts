import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'view-user',
  templateUrl: './view-user.component.html',
  styles: ['./view-user.component.css']
})
export class ViewComponent implements OnInit {

  user: User = new User();

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
    this.activatedRoute.params.subscribe(params => {
      this.getUsers(params.id);
  });
  }

  ngOnInit() {};

  getUsers(userId){
    this.userService.getUserById(userId)
      .subscribe( (data :any) => {
        this.user = data.result;
      });
  }

}


