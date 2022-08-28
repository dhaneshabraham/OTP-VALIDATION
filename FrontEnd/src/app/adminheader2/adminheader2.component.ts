import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminheader2',
  templateUrl: './adminheader2.component.html',
  styleUrls: ['./adminheader2.component.css']
})
export class Adminheader2Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onLogout(){
    // this.userService.deleteToken();
    this.router.navigate(['/']);
  }

}
