import { Component, OnInit } from '@angular/core';
import { LandRegistrationService } from 'src/app/services/land-registration.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-processing-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css']
})
export class Step4Component implements OnInit {
  buyerDataForm = new FormGroup({
    buyerNIC: new FormControl('')
  });

  constructor(private lrService: LandRegistrationService) { }

  ngOnInit() {
    this.lrService.setCurrentStep(4);
  }

}
