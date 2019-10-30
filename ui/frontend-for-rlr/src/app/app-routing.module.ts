import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/processing/pages/dashboard/dashboard.component';
import { TransactionRequestsComponent } from './components/processing/pages/transaction-requests/transaction-requests.component';
import { SupportFacilitiesComponent } from './components/processing/pages/support-facilities/support-facilities.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/processing/pages/search/search.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'transaction-requests', component:  TransactionRequestsComponent},
  { path: 'search', component: SearchComponent },
  { path: 'support-facilities', component: SupportFacilitiesComponent },
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
