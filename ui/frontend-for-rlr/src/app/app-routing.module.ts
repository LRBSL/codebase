import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/processing/pages/dashboard/dashboard.component';
import { TransactionRequestsComponent } from './components/processing/pages/transaction-requests/transaction-requests.component';
import { LoginComponent } from './components/login/login.component';
import { SearchLandRecordsComponent } from './components/processing/pages/search-land-records/search-land-records.component';
import { AddNewMemberComponent } from './components/processing/pages/add-new-member/add-new-member.component';
import { SearchNotariesSurveyorsComponent } from './components/processing/pages/search-notaries-surveyors/search-notaries-surveyors.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'transaction-requests', component:  TransactionRequestsComponent},
  { path: 'search-land-records', component: SearchLandRecordsComponent },
  { path: 'search-notaries-surveyors', component: SearchNotariesSurveyorsComponent },
  { path: 'add-new-member', component: AddNewMemberComponent },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
