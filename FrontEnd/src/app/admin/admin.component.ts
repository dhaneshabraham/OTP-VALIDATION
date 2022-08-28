import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router : Router) { }

  model ={
    email :'',
    password:''
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;
  ngOnInit() {
  }
  onSubmit(form : NgForm){
    this.router.navigate(['adminhome'])
    // this.userService.login(form.value).subscribe(
    //   res => {
    //     this.userService.setToken(res['token']);
    //     // this.router.navigateByUrl('/userprofile');
    //     this.router.navigateByUrl('studentprofile');
    //   },
    //   err => {
    //     this.serverErrorMessages = err.error.message;
    //   });

  }
}
