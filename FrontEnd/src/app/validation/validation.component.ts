import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  constructor(private userService: UserService,private router : Router) { }

  model ={
    email :'',
    password:'',
    otp:''
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;
  ngOnInit() {

  }

  onSubmit(form : NgForm){
    this.userService.login(form.value).subscribe(
      res => {
        // this.userService.setToken(res['token']);

        this.router.navigateByUrl('studentprofile');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }

}
