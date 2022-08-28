import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
@Component({
  selector: 'app-my-home-stud-profile',
  templateUrl: './my-home-stud-profile.component.html',
  styleUrls: ['./my-home-stud-profile.component.css']
})
export class MyHomeStudProfileComponent implements OnInit {
  userDetails;
  st;
  msg: string;
  divClass:boolean=false
  constructor(private userService: UserService, private router: Router) { }
  ngOnInit() {
    
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
      },
      err => { 
        console.log(err);
        });

  }
  showMore()
  {
    this.divClass=true
  }

}
