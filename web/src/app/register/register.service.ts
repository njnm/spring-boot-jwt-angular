import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegisterService {

  constructor(private http:HttpClient) {}

  private loginUrl = 'http://localhost:8080/login';

  public register(user) {
    return this.http.post(this.loginUrl + '/register', user);
  }

}
