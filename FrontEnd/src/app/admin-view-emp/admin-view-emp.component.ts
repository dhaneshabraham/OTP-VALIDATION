import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../shared/user.service';
@Component({
  selector: 'app-admin-view-emp',
  templateUrl: './admin-view-emp.component.html',
  styleUrls: ['./admin-view-emp.component.css']
})
export class AdminViewEmpComponent implements OnInit {
  employers = [{
    fullName: '' ,
    email: '' 
  }];
  constructor(private userService: UserService,private router:Router,public http:HttpClient,) { }
  ngOnInit() {
    this.userService.getemployers()
    .subscribe((data)=> {
      this.employers = JSON.parse(JSON.stringify(data));
      console.log("l-38",this.employers);
    }); 
  }

  deleteemployer(employer:any){
    console.log(employer);
    if(confirm("Are you sure to delete this student??")) {
      this.userService.removeemployer(employer._id)
      .subscribe((data) => {
        this.ngOnInit()
      })
    }else{
      this.ngOnInit()
    }  
  }

}
