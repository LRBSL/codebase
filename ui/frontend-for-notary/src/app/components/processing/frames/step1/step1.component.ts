import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { LandRegistrationService } from 'src/app/services/land-registration.service';

@Component({
  selector: 'app-processing-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {
  ownerDataForm = new FormGroup({
    ownerNIC: new FormControl(''),
    landKey: new FormControl('')
  });

  constructor(private lrService: LandRegistrationService) { }

  ngOnInit() {
    this.lrService.setCurrentStep(1);
  }
}
