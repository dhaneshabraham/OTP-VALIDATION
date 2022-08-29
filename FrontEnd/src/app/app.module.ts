// built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { appRoutes } from './routes';
import { Ng2SearchPipeModule} from "ng2-search-filter";
import { FileSelectDirective } from 'ng2-file-upload';
import { OtpgenerationComponent } from './otpgeneration/otpgeneration.component';
import { ValidationComponent } from './validation/validation.component';
import { WelcomeComponent } from './welcome/welcome.component';




@NgModule({
  declarations: [
    AppComponent,
    FileSelectDirective,
    OtpgenerationComponent,
    ValidationComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,Ng2SearchPipeModule
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
