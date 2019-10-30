import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandRegistrationComponent } from './components/processing/pages/land-registration/land-registration.component';
import { DashboardComponent } from './components/processing/pages/dashboard/dashboard.component';
import { LandRecordsComponent } from './components/processing/pages/land-records/land-records.component';
import { SupportFacilitiesComponent } from './components/processing/pages/support-facilities/support-facilities.component';
import { Step1Component } from './components/processing/frames/step1/step1.component';
import { Step2Component } from './components/processing/frames/step2/step2.component';
import { Step3Component } from './components/processing/frames/step3/step3.component';
import { Step4Component } from './components/processing/frames/step4/step4.component';
import { Step5Component } from './components/processing/frames/step5/step5.component';
import { Step6Component } from './components/processing/frames/step6/step6.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'land-registration', component: LandRegistrationComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'step-1' },
      { path: 'step-1', component: Step1Component },
      { path: 'step-2', component: Step2Component },
      { path: 'step-3', component: Step3Component },
      { path: 'step-4', component: Step4Component },
      { path: 'step-5', component: Step5Component },
      { path: 'step-6', component: Step6Component }
    ]
  },
  { path: 'land-records', component: LandRecordsComponent },
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
