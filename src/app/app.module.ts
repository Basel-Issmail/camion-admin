import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './modules/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToeknInterceptor } from './shared/interceptors/token.interceptor';
import { SpinnerInterceprotService } from './shared/interceptors/spinner-interceprot';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { CompaniesComponent } from './modules/companies/companies.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CompaniesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceprotService, multi: true, },
    { provide: HTTP_INTERCEPTORS, useClass: ToeknInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
