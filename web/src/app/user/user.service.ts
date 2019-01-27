import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8080/users';
  //private userUrl = '/api';

  private logoutUrl = 'http://localhost:8080/logout';
  //private logoutUrl = '/api';

  public getUsers() {
    return this.http.get(this.userUrl);
  }

  public getUserById(id) {
    return this.http.get(this.userUrl + "/" + id);
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }

  public createUser(user) {
    return this.http.post(this.userUrl, user);
  }

  public logout() {
    return this.http.get(this.logoutUrl);
  }

}
