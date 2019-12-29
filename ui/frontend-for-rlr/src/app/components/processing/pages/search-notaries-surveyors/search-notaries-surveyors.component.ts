import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

interface Member {
  memberId: string,
  memberName:string,
  memberType:string,
  memberAddress:string,
}

@Component({
  selector: 'app-search-notaries-surveyors',
  templateUrl: './search-notaries-surveyors.component.html',
  styleUrls: ['./search-notaries-surveyors.component.css']
})
export class SearchNotariesSurveyorsComponent implements OnInit {

  memberRecords: Member[] = [];

  searchMembersForm = new FormGroup({});

  constructor() { }

  ngOnInit() {
    let x:Member = {
      memberId: '112233',
      memberName: 'Ravindu Sachintha',
      memberType: 'Notary',
      memberAddress: '640/57, 2nd Kurana, Colombo Road, Negombo'
    }
    this.memberRecords.push(x);
    // this.memberRecords.push(x);
    // this.memberRecords.pop();
  }

  isMemberRecordEmpty() {
    return this.memberRecords.length == 0
  }

}
