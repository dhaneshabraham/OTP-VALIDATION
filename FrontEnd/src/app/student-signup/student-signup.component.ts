import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
// import Swal from 'sweetalert2';
@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.css']
})
export class StudentSignupComponent implements OnInit {

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  showModal: boolean=false;
  serverErrorMessages: string;


  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    this.userService.postUser(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 12000);
        this.resetForm(form);
        this.router.navigate(['/studentsignin']);
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
