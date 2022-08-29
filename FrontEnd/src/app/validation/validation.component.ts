import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { SharedService } from '../shared/shared.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  constructor(private userService: UserService,private router : Router,private shareData:SharedService) { }
emails="no_mail@nothing.nil"

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;
  ngOnInit() {
this.emails=this.shareData.getMessage()
  }
  onSubmit(form : NgForm){
  
    form.controls.email.setValue(this.emails)
    this.userService.validate(form.value)
    .subscribe(
      res => {
    this.router.navigateByUrl('welcome');
      },
      err => {
        this.serverErrorMessages = "Invalid OTP";
      });
  }

}
