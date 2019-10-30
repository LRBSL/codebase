import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { WindowComponent } from './components/processing/window/window.component';
import { Step1Component } from './components/processing/frames/step1/step1.component';
import { Step2Component } from './components/processing/frames/step2/step2.component';
import { Step3Component } from './components/processing/frames/step3/step3.component';
import { Step4Component } from './components/processing/frames/step4/step4.component';
import { Step5Component } from './components/processing/frames/step5/step5.component';
import { Step6Component } from './components/processing/frames/step6/step6.component';
import { LandRegistrationComponent } from './components/processing/pages/land-registration/land-registration.component';
import { DashboardComponent } from './components/processing/pages/dashboard/dashboard.component';
import { LandRecordsComponent } from './components/processing/pages/land-records/land-records.component';
import { SupportFacilitiesComponent } from './components/processing/pages/support-facilities/support-facilities.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    WindowComponent,
    Step1Component,
    Step2Component,
    Step4Component,
    Step5Component,
    Step6Component,
    LandRegistrationComponent,
    DashboardComponent,
    LandRecordsComponent,
    SupportFacilitiesComponent,
    LoginComponent,
    Step3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
