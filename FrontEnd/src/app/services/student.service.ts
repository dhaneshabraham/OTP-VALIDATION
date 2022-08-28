import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  selectedStudent:Student={
    StudentName:'',  
    Email:'',
    Password:''
  };

  serverAddress= "http://localhost:3000";
  constructor(private http:HttpClient) { }
  signupStudent(student: Student)
  {
    return this.http.post(`${this.serverAddress}/signupStudent`,student)
  }
 
}
