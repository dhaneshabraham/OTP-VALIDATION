import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { StudentSigninComponent } from './student-signin/student-signin.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';

import { MyHomeStudComponent } from './my-home-stud/my-home-stud.component';
import { MyHomeStudProfileComponent } from './my-home-stud-profile/my-home-stud-profile.component';
import { EditmyHomeStudComponent } from './editmy-home-stud/editmy-home-stud.component';
import { HomeComponent } from './home/home.component';
import { HomeMainComponent } from './home-main/home-main.component';

import { FeaturesComponent } from './features/features.component';

import { AdminStudentComponent } from './admin-student/admin-student.component';
import { AdminUpdatestudentComponent } from './admin-updatestudent/admin-updatestudent.component';
import { AdminComponent } from './admin/admin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { StudSearchComponent } from './stud-search/stud-search.component';
import { EmployerComponent } from './employer/employer.component';
import { EmployerloginComponent } from './employerlogin/employerlogin.component';
import { EmployersignupComponent } from './employersignup/employersignup.component';
import { AdminViewEmpComponent } from './admin-view-emp/admin-view-emp.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';


export const appRoutes: Routes = [
    {path:'',component:AdminUpdatestudentComponent},
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