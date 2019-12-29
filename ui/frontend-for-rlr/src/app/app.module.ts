import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { WindowComponent } from './components/processing/window/window.component';
import { DashboardComponent } from './components/processing/pages/dashboard/dashboard.component';
import { TransactionRequestsComponent } from './components/processing/pages/transaction-requests/transaction-requests.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchLandRecordsComponent } from './components/processing/pages/search-land-records/search-land-records.component';
import { SearchNotariesSurveyorsComponent } from './components/processing/pages/search-notaries-surveyors/search-notaries-surveyors.component';
import { AddNewMemberComponent } from './components/processing/pages/add-new-member/add-new-member.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    WindowComponent,
    DashboardComponent,
    TransactionRequestsComponent,
    LoginComponent,
    SearchLandRecordsComponent,
    SearchNotariesSurveyorsComponent,
    AddNewMemberComponent
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
