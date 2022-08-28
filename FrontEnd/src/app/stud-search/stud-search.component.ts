import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-stud-search',
  templateUrl: './stud-search.component.html',
  styleUrls: ['./stud-search.component.css']
})
export class StudSearchComponent implements OnInit {
  students = [{
    fullName: '' ,
    email: '' ,
    password: '' ,
    phone: '' ,
    address: '' ,
    qualification: '' ,
    passout: '' ,
    skills: '' ,
    employmentStatus: '' ,
    techtraining: '' ,
    course: '' ,
    image: '',
    _id:'',
    exitexammark:''
  }];

 

 p: number=1;
 name: any;


  constructor(private userService: UserService) { 

    
  }
 
  ngOnInit(): void {

    this.userService.getStudents()
    .subscribe((data)=> {
      this.students = JSON.parse(JSON.stringify(data));
      console.log(this.students);
    });      

  }

}
