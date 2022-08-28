import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { StudentSigninComponent } from './student-signin/student-signin.component';
import { HomeComponent } from './home/home.component';
import { OtpgenerationComponent } from './otpgeneration/otpgeneration.component';
import { ValidationComponent } from './validation/validation.component';
export const appRoutes: Routes = [
    {path:'',component:OtpgenerationComponent},
    {path:'otp',component:OtpgenerationComponent},
    {path:'validate',component:ValidationComponent}
    // {path:'studentsignin',component:StudentSigninComponent},
    // {path:'studentsignup',component:StudentSignupComponent},
    // {path:'studentprofile',component:StudentProfileComponent},
    // {path:'admin',component:AdminComponent,
    //  children:[{path:'',component:AdminloginComponent}]},
    // {path:'adminmenu',component:AdminhomeComponent},
    
    // {path:'adminhome',component:AdminStudentComponent},
    // {path:'viewdetails',component:AdminUpdatestudentComponent},
    // {path:'searchstud',component:StudSearchComponent},
    // {path:'employer',component:EmployerloginComponent},
    // {path:'employersignin',component:EmployerloginComponent},
    // {path:'employersignup',component:EmployersignupComponent},
    // {path:'viewemp',component:AdminViewEmpComponent}
               

   
];