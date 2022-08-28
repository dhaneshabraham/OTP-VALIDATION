import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employerlogin',
  templateUrl: './employerlogin.component.html',
  styleUrls: ['./employerlogin.component.css']
})
export class EmployerloginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){
    this.router.navigate(['searchstud'])
  }
signup(){
  this.router.navigate(['employersignup'])
}
}
