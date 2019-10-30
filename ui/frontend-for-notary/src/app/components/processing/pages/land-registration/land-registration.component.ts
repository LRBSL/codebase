import { Component, OnInit } from '@angular/core';
import { LandRegistrationService } from '../../../../services/land-registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-land-registration',
  templateUrl: './land-registration.component.html',
  styleUrls: ['./land-registration.component.css']
})
export class LandRegistrationComponent implements OnInit {

  stepPercentage: number;
  stepFormRef: any;
  submitBtnTitle: string;

  constructor(private router: Router, private lrService: LandRegistrationService) {
    this.submitBtnTitle = "Proceed";
  }

  ngOnInit() {
    this.lrService.setCurrentStep(1);
    this.stepPercentage = 0;
  }

  onActivate(componentRef: any) {
    this.stepFormRef = componentRef;
  }

  onSubmit() {
    switch (this.lrService.getCurrentStep().count) {
      case 1: {
        let owner_nic = this.stepFormRef.ownerDataForm.value.ownerNIC;
        let land_key = this.stepFormRef.ownerDataForm.value.landKey;
        // owner validation from mapper table
        this.lrService.getLandIdFromMapper({
          ownerNIC: owner_nic,
          landKey: land_key
        }).subscribe((res: any) => {
          if (res != null) {
            this.lrService.setOwnerCredentials({
              ownerNIC: owner_nic,
              landKey: land_key
            });
            this.lrService.setLandID(res.land_id);
            this.lrService.setCurrentStep(2);
            this.stepPercentage = 20;
            this.lrService.getLandBlockInfo(res.land_id).subscribe((res: any) => {
              this.lrService.setLandBlock({
                id: res._id,
                extent: res._Extent,
                owner: res._Owner,
                parentLandID: res._ParentLandID,
                rlRegistry: res._RLRegistry,
                boundaries: [
                  [res._Boundaries[0][0], res._Boundaries[0][1]],
                  [res._Boundaries[1][0], res._Boundaries[1][1]],
                  [res._Boundaries[2][0], res._Boundaries[2][1]],
                  [res._Boundaries[3][0], res._Boundaries[3][1]],
                ]
              });
              this.lrService.getOwnerNicFromDB({ ownerNIC: owner_nic }).subscribe((res: any) => {
                this.lrService.setOwnerNIC({
                  ownerNIC: res.nic_no,
                  fullname: res.fullname,
                  gender: res.gender,
                  birthday: res.birthday,
                  occupation: res.occupation,
                  postal_address: res.postal_address,
                  registered_date: res.registered_date
                });
              }, (err) => { console.log(err) });
              this.lrService.getLandDeedFromDB({ land_id: this.lrService.getLandID() }).subscribe((res: any) => {
                this.lrService.setLandDeed({
                  reg_no: res.reg_no,
                  land_id: res.land_id,
                  notary_name: res.notary_name,
                  deed_type: res.deed_type,
                  plan_id: res.plan_id
                });
              }, (err) => { console.log(err) });
              this.lrService.getLandPlanFromDB({ land_id: this.lrService.getLandID() }).subscribe((res: any) => {
                this.lrService.setLandPlan({
                  reg_no: res.reg_no,
                  land_id: res.land_id,
                  surveyor_name: res.surveyor_name
                });
              }, (err) => { console.log(err) });
            }, (err) => { console.log(err) });
            this.router.navigate(['land-registration/step-2']);
          } else {
            alert("Owner credentials not valid / No land records to for credentials.");
          }
        }, (err) => {
          console.log(err);
          alert(err.message);
        });
        break;
      }

      case 2: {
        this.lrService.setCurrentStep(3);
        this.stepPercentage = 40;
        this.router.navigate(['land-registration/step-3']);
        break;
      }

      case 3: {
        this.lrService.setCurrentStep(4);
        this.stepPercentage = 60;
        this.router.navigate(['land-registration/step-4']);
        break;
      }

      case 4: {
        let buyer_nic = this.stepFormRef.buyerDataForm.value.buyerNIC;
        this.lrService.getOwnerNicFromDB({ ownerNIC: buyer_nic }).subscribe((res: any) => {
          this.lrService.setBuyerNIC({
            ownerNIC: res.nic_no,
            fullname: res.fullname,
            gender: res.gender,
            birthday: res.birthday,
            occupation: res.occupation,
            postal_address: res.postal_address,
            registered_date: res.registered_date
          });
          this.lrService.setCurrentStep(5);
          this.stepPercentage = 80;
          this.router.navigate(['land-registration/step-5']);
        }, (err) => { alert(err) });
        break;
      }

      case 5: {
        this.lrService.setCurrentStep(6);
        this.stepPercentage = 100;
        this.submitBtnTitle = "Commit";
        this.router.navigate(['land-registration/step-6']);
        break;
      }

      case 6: {
        this.lrService.changeNotaryVote(this.lrService.getLandID(), 1, this.lrService.getBuyerNIC().fullname).subscribe((res: any) => {
          alert("Transaction successfully committed for the Regional Land Registration process.");
          this.router.navigate(['dashboard']);
        }, (err) => {
          console.log(err);
          alert("Transaction not committed due to some reason. Try again.");
          this.router.navigate(['land-registration']);
        })
        break;
      }
    }
  }

  goBack() {
    switch (this.lrService.getCurrentStep().count) {
      case 2: {
        this.lrService.setCurrentStep(1);
        this.stepPercentage = 0;
        this.router.navigate(['land-registration/step-1']);
        break;
      }
      case 3: {
        this.lrService.setCurrentStep(2);
        this.stepPercentage = 20;
        this.router.navigate(['land-registration/step-2']);
        break;
      }
      case 4: {
        this.lrService.setCurrentStep(3);
        this.stepPercentage = 40;
        this.router.navigate(['land-registration/step-3']);
        break;
      }
      case 5: {
        this.lrService.setCurrentStep(4);
        this.stepPercentage = 60;
        this.router.navigate(['land-registration/step-4']);
        break;
      }
      case 6: {
        this.lrService.setCurrentStep(5);
        this.stepPercentage = 80;
        this.router.navigate(['land-registration/step-5']);
        break;
      }
    }
  }

  cancelProcess() {
    this.lrService.setCurrentStep(1);
    this.stepPercentage = 0;
    this.router.navigate(['land-registration/step-1']);
  }
}
