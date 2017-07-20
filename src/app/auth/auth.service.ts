import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()
export class AuthService {

  private apiUrl = "http://chms-server/api/v1/"

  constructor( private http: Http) { }



  login(data: any) {
        return this.http.post(this.apiUrl + 'auth', data)
        .map((response: Response) => {
            let userToken = response.json();
            if (userToken && userToken.token) {
                localStorage.setItem('accessToken', userToken.accessToken);
            }
        });
    }

    createAuthorizationHeader(headers: Headers) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('accessToken'));
   }

    getUser(){
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(this.apiUrl + 'authservice/user', {headers: headers})
        .map((response: Response) => {
            let user = response.json();
            if (user && user.id) {
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        });
    }

    currentUser = (localStorage.getItem('currentUser')) ? JSON.parse(localStorage.getItem('currentUser')) : null;

    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }

  logout(){
      localStorage.clear();
  }


  isLoggedIn(){
      if(localStorage.getItem('accessToken')){
          return true;
      }else{
          return false;
      }
  }


}
