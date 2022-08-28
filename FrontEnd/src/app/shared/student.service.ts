import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  server: string = 'http://localhost:3000/api'
  constructor(private http: HttpClient) { }

  newStudent(student: any) {
    // console.log('studentservice-L12', student);
    return this.http.post(`${this.server}/student/register`, student);
  }

  getStudents() {
    return this.http.get(`${this.server}/students`);
  }

  removestudent(id:any){
    console.log(id);
    return this.http.delete('http://localhost:3000/api/student/delete/'+id);
  }

  getStudent(id:any){
        //console.log('studentservice-L12', id);
    return this.http.get("http://localhost:3000/api/student/"+id);
  }

  updateStudent(student:any){
    console.log('studentservice-L33', student);
    return this.http.put('http://localhost:3000/api/update-student',{student})
    .subscribe(data=> {console.log('l34kkhchxklh',data)})       
  }
  
  approveStudent(id:any){
    return this.http.post("http://localhost:3000/api/approve-student",{"id":id})
  }

}
