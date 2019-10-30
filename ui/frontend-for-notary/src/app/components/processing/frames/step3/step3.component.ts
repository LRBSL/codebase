import { Component, OnInit } from '@angular/core';
import { LandRegistrationService, LandBlock } from 'src/app/services/land-registration.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {
  blocksSub: Subscription = null;
  blockList: any = [];

  constructor(private lrService: LandRegistrationService) { }

  ngOnInit() {
    this.lrService.setCurrentStep(3);
    this.lrService.getHistoryForLand(this.lrService.getLandID()).subscribe((res: any) => {
      res.forEach(block => {
        if (block.value._SurveyorVote == 1 && block.value._NotaryVote == 0 && block.value._CurrentOwnerVote == 0) {
          let tmp: LandBlock = {
            id: block.value._id,
            extent: block.value._Extent,
            owner: block.value._Owner,
            parentLandID: block.value._ParentLandID,
            rlRegistry: block.value._RLRegistry,
            boundaries: [
              [block.value._Boundaries[0][0], block.value._Boundaries[0][1]],
              [block.value._Boundaries[1][0], block.value._Boundaries[1][1]],
              [block.value._Boundaries[2][0], block.value._Boundaries[2][1]],
              [block.value._Boundaries[3][0], block.value._Boundaries[3][1]],
            ]
          }
          this.blockList.unshift(tmp);
        }
      });
    }, (err) => {
      console.log(err);
      alert(err.message);
    });
  }

  isBlockListEmpty() {
    return this.blockList.length == 0;
  }

}
