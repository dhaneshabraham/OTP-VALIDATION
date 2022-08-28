import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { StudentSigninComponent } from './student-signin/student-signin.component';








import { HomeComponent } from './home/home.component';





export const appRoutes: Routes = [
    {path:'',component:HomeComponent},
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