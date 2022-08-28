import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from './user.model';
import { Employer } from './employer.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedEmployer:Employer={
    fullName: '',
    email: '',
    password: ''
  }
  selectedUser: User = {
    fullName: '',
    email: '',
    password: '',
    phone:'',
    address:'',
    qualification:'',
    passout:'',
    skills:'',
    employmentStatus:'',
    techtraining:'',
    course:'',
    image:'',
    exitexammark:'',
    status:'',
    studId:''
  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }

  //HttpMethods

  postUser(user: User){
    return this.http.post(environment.apiBaseUrl+'/register',user,this.noAuthHeader);
  }
  postEmployer(user: User){
    console.log(user)
    return this.http.post(environment.apiBaseUrl+'/empregister',user,this.noAuthHeader);
  }

  login(authCredentials) {
    return this.http.post(environment.apiBaseUrl + '/authenticate', authCredentials,this.noAuthHeader);
  }

  getUserProfile() {
    return this.http.get(environment.apiBaseUrl + '/userProfile');
  }
  getStudent(id:any){

return this.http.get(environment.apiBaseUrl + '/student/'+id);
}

getemployers(){
  return this.http.get(environment.apiBaseUrl + '/employer');
}
removeemployer(id:any){
  console.log(id);
  return this.http.delete(environment.apiBaseUrl + '/employerdelete/'+id);
}



  getStudents() {
    return this.http.get(environment.apiBaseUrl + '/students');
  }


  updateStudent(student:any){
    console.log('studentservice-L33', student);
    return this.http.put(environment.apiBaseUrl + '/update-student',{student})
    .subscribe(data=> {console.log('l34kkhchxklh',data)})       
  }
  
  approveStudent(id:any){
    return this.http.post(environment.apiBaseUrl + '/approve-student',{"id":id})
  }

  removestudent(id:any){
    console.log(id);
    return this.http.delete(environment.apiBaseUrl + '/delete/'+id);
  }



  //Helper Methods

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }
  studEnrollment(id:any,user:any)
  {
      return this.http.put(environment.apiBaseUrl + `/enrollment/${id}`,user);

  }

}
