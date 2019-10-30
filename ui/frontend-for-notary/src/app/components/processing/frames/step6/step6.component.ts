import { Component, OnInit } from '@angular/core';
import { LandRegistrationService } from 'src/app/services/land-registration.service';

@Component({
  selector: 'app-processing-step6',
  templateUrl: './step6.component.html',
  styleUrls: ['./step6.component.css']
})
export class Step6Component implements OnInit {

  constructor(private lrService: LandRegistrationService) { }

  ngOnInit() {
    this.lrService.setCurrentStep(6);
  }

}
