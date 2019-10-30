import { Component, OnInit } from '@angular/core';
import { LandRegistrationService, LandBlock } from 'src/app/services/land-registration.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-land-records',
  templateUrl: './transaction-requests.component.html',
  styleUrls: ['./transaction-requests.component.css']
})
export class TransactionRequestsComponent implements OnInit {
  blocksSub: Subscription = null;
  blockList: any = [];

  constructor(private lrService: LandRegistrationService) { }

  ngOnInit() {
    this.blocksSub = this.lrService.getAllLandBlocksInfo().subscribe((res: any) => {
      if (res != null || res.length != 0) {
        res.forEach(item => {
          if (item._SurveyorVote == 1 && item._NotaryVote == 1 && item._CurrentOwnerVote == 0) {
            let tmp: LandBlock = {
              id: item._id,
              extent: item._Extent,
              owner: item._Owner,
              newOwner: item._NewOwner,
              parentLandID: item._ParentLandID,
              rlRegistry: item._RLRegistry,
              boundaries: [
                [item._Boundaries[0][0], item._Boundaries[0][1]],
                [item._Boundaries[1][0], item._Boundaries[1][1]],
                [item._Boundaries[2][0], item._Boundaries[2][1]],
                [item._Boundaries[3][0], item._Boundaries[3][1]],
              ]
            }
            this.blockList.push(tmp);
          }
        });
      }
    });
  }

  isBlockListEmpty() {
    return this.blockList.length == 0;
  }

  currentOwnerAccepted(landID: string) {
    this.lrService.changeCurrentOwnerVote(landID, 1).subscribe((res) => {
      alert("Transaction successfully committed.");
    }, (err) => {
      alert("Transaction not committed due to " + err.message);
    })
  }

}
