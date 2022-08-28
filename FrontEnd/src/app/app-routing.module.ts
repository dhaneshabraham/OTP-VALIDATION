import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentSigninComponent } from './student-signin/student-signin.component';
import { StudentSignupComponent } from './student-signup/student-signup.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'studentSignup',component:StudentSignupComponent},
  {path:'studentSignin',component:StudentSigninComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
