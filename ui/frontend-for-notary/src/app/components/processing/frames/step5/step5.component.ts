import { Component, OnInit } from '@angular/core';
import { LandRegistrationService } from 'src/app/services/land-registration.service';

@Component({
  selector: 'app-processing-step5',
  templateUrl: './step5.component.html',
  styleUrls: ['./step5.component.css']
})
export class Step5Component implements OnInit {

  constructor(private lrService: LandRegistrationService) { }

  ngOnInit() {
    this.lrService.setCurrentStep(5);
  }

  isDataLoaded() {
    return this.lrService.getBuyerNIC() != null;
  }

  getBuyerNIC() {
    return this.lrService.getBuyerNIC();
  }
}
