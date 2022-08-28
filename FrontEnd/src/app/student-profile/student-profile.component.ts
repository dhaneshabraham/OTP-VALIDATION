import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  userDetails;
  st;
  msg: string;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        this.st=res['user'].status
        if (this.st=='1')
        {
            this.router.navigate(['/enroll']);
        }
        else if(this.st=='2')
        {
          this.msg="is waiting for ADMIN's approoval"
        }
      },
      err => { 
        console.log(err);
        });

  }
  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/studentsignin']);
  }
}
