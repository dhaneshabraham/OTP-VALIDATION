import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User = {
    fullName: '',
    email: '',
    otp:''
  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }

  //HttpMethods

  postUser(user: User){
    
    return this.http.post(environment.apiBaseUrl+'/register',user,this.noAuthHeader);
  }
 
  validate(user: User){
    
    return this.http.post(environment.apiBaseUrl+'/valid',user,this.noAuthHeader);
  }


}
