import { Component, OnInit } from '@angular/core';
import { LandRegistrationService, LandBlock } from 'src/app/services/land-registration.service';

@Component({
  selector: 'app-processing-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {

  constructor(private lrService: LandRegistrationService) {
  }

  ngOnInit() {
    this.lrService.setCurrentStep(2);
  }

  isDataLoaded() {
    return this.lrService.getLandBlock() != null && this.lrService.getOwnerNIC() != null
      && this.lrService.getLandDeed() != null && this.lrService.getLandPlan() != null;
  }

  getLandBlock() {
    return this.lrService.getLandBlock();
  }

  getOwnerNIC() {
    return this.lrService.getOwnerNIC();
  }

  getLandDeed() {
    return this.lrService.getLandDeed();
  }

  getLandPlan() {
    return this.lrService.getLandPlan();
  }

}
