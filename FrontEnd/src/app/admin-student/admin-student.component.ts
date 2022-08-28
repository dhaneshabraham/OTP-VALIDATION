import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-student',
  templateUrl: './admin-student.component.html',
  styleUrls: ['./admin-student.component.css']
})
export class AdminStudentComponent implements OnInit {
  students = [{
    fullName: '' ,
    email: '' ,
    password: '' ,
    phone: '' ,
    address: '' ,
    qualification: '' ,
    passout: '' ,
    skills: '' ,
    employmentStatus: '' ,
    techtraining: '' ,
    course: '' ,
    image: '',
    _id:'',
    exitexammark:'',
    status:''
  }];
  constructor(private userService: UserService,private router:Router) { }

  ngOnInit() {
    
    this.userService.getStudents()
    .subscribe((data)=> {
      this.students = JSON.parse(JSON.stringify(data));
      console.log(this.students);
    }); 

  }
  editStudent(student:any){
    localStorage.setItem('editstudent',student._id)
    this.router.navigate(['viewdetails'])
  }
  deleteStudent(student:any){
    console.log(student);
    if(confirm("Are you sure to delete this student??")) {
      this.userService.removestudent(student._id)
      .subscribe((data) => {
        this.ngOnInit()
      })
    }else{
      this.ngOnInit()
    }  
  }

}
