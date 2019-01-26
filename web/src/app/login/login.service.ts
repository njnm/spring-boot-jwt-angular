import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private http:HttpClient) {}

  private loginUrl = 'http://localhost:8080/login';
  //private loginUrl = '/api';

  public login(loginUser) {
    return this.http.post(this.loginUrl + '/generate-token', loginUser);
  }

}
