import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';
@Component({
  selector: 'app-otpgeneration',
  templateUrl: './otpgeneration.component.html',
  styleUrls: ['./otpgeneration.component.css']
})
export class OtpgenerationComponent implements OnInit {

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  showModal: boolean=false;
  serverErrorMessages: string;


  constructor(private userService:UserService,private router:Router,private shareData:SharedService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    let x=form.controls.email.value
    this.shareData.setMessage(x)
    this.userService.postUser(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 120000);
        this.resetForm(form);
        setTimeout(() => this.showSucessMessage = false, 120000);
        this.router.navigate(['/validate']);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );
  }

  resetForm(form: NgForm) {
    this.userService.selectedUser = {
    fullName: '',
    email: '',
    otp:'',
    password: '',
    phone:'',
    address:'',
    qualification:'',
    passout:'',
    skills:'',
    employmentStatus:'',
    techtraining:'',
    course:'',
    image:'',
    exitexammark:'',
    status:'',
    studId:''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}
