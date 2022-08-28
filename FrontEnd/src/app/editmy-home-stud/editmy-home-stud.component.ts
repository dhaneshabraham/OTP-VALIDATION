import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-editmy-home-stud',
  templateUrl: './editmy-home-stud.component.html',
  styleUrls: ['./editmy-home-stud.component.css']
})
export class EditmyHomeStudComponent implements OnInit {
  userDetails;
  st;
  msg: string;
  fn:string;
 
    em: string; 
    pd: string;
    ph:string;
    ad:string;
    ql:string;
    pt:string;
    sk:string;
    es:string;
    tt:string;
    cs:string;
    ig:string;
    ex:string;
    ss:string;
    sd:string;
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
  onSubmit(form: NgForm) {

    var c=form.controls['fullName'].value;
    this.fn=(c==''?this.userDetails.fullName:form.controls['fullName'].value)
    c=form.controls['email'].value;
    this.em=(c==''?this.userDetails.email:form.controls['email'].value)
    c=form.controls['phone'].value;
    this.ph=(c==''?this.userDetails.phone:form.controls['phone'].value)
    c=form.controls['address'].value;
    this.ad=(c==''?this.userDetails.address:form.controls['address'].value)
    c=form.controls['qualification'].value;
    this.ql=(c==''?this.userDetails.qualification:form.controls['qualification'].value)
    c=form.controls['passout'].value;
    this.pt=(c==''?this.userDetails.passout:form.controls['passout'].value)
    c=form.controls['skills'].value;
    this.sk=(c==''?this.userDetails.skills:form.controls['skills'].value)
    c=form.controls['employmentStatus'].value;
    this.es=(c==''?this.userDetails.employmentStatus:form.controls['employmentStatus'].value)
    c=form.controls['techtraining'].value;
    this.tt=(c==''?this.userDetails.techtraining:form.controls['techtraining'].value)
    c=form.controls['course'].value;
    this.cs=(c==''?this.userDetails.course:form.controls['course'].value)
  
    this.ig=(c==''?this.userDetails.image:form.controls['image'].value)
     
    const model={
      fullName: this.fn,
      email: this.em,
      phone:this.ph,
      address:this.ad,
      qualification:this.ql,
      passout:this.pt,
      skills:this.sk,
      employmentStatus:this.es,
      techtraining:this.tt,
      course:this.cs,
      // image:'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png',
      exitexammark:this.userDetails.exitexammark,
      status:this.userDetails.status
      };
// alert('edit')
    this.userService.studEnrollment(this.userDetails._id,model).subscribe((data)=>{
      console.log(data)
      alert('data modified')
      this.router.navigateByUrl('studentprofile');
    })
  }
  // for image upload
    
  url: any; 
	selectFile(event: any) { //Angular 11, for stricter type
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}
		var mimeType = event.target.files[0].type;
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result; 
		}
    
	}

}
