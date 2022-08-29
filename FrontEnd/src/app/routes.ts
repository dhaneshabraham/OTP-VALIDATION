import { Routes } from '@angular/router';
import { OtpgenerationComponent } from './otpgeneration/otpgeneration.component';
import { ValidationComponent } from './validation/validation.component';
import { WelcomeComponent } from './welcome/welcome.component';
export const appRoutes: Routes = [
    {path:'',component:OtpgenerationComponent},
    {path:'otp',component:OtpgenerationComponent},
    {path:'validate',component:ValidationComponent},
    {path:'welcome',component:WelcomeComponent}
];