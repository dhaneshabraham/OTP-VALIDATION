import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-updatestudent',
  templateUrl: './admin-updatestudent.component.html',
  styleUrls: ['./admin-updatestudent.component.css']
})
export class AdminUpdatestudentComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }

  studentData = {
    name: '' ,
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
  };
  
    ngOnInit(): void {
  
      let id = localStorage.getItem('editstudent')
      console.log("lsee",id)
     
      this.userService.getStudent(id)
      .subscribe((data)=>{
        this.studentData=JSON.parse(JSON.stringify(data))
            
        console.log("l-38",data);    
        console.log("l-39",this.studentData);
        
      })
  }

  updateStudent(){
  console.log("l-50",this.studentData );
  this.userService.updateStudent(this.studentData)
  alert("success")

  }

  approveStudent(data:any){
  console.log(data);
  this.userService.approveStudent(data._id)
 .subscribe(
   (      res): void=>{
     alert("Employee Approved")
     this.ngOnInit()
   },
   err=>{
     alert("something happened wrong try again")
      this.ngOnInit()
   }
  )





  }
}
