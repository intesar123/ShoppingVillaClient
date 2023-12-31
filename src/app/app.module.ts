import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './account/login/login.component';
import { NavigationBarComponent } from './menu/navigation-bar/navigation-bar.component';
import { RegisterComponent } from './account/register/register.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderComponent } from './common/loader/loader.component';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { MessageComponent } from './common/message/message.component';
import { ErrorComponent } from './errors/error/error.component';
import { UserProfileComponent } from './account/user-profile/user-profile.component';
import { AccountInterceptor } from './services/account.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationBarComponent,
    RegisterComponent,
    LoaderComponent,
    MessageComponent,
    ErrorComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RecaptchaModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
   },
   {
    provide: HTTP_INTERCEPTORS,
    useClass: AccountInterceptor,
    multi: true
   },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
