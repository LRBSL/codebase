import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MemberService } from 'src/app/services/member.service';

interface Member {
  memberId: string,
  memberName:string,
  memberType:string,
  memberRLR:string,
  memberAddress:string,
  memberNIC:string,
  memberRegDate:string,
  memberEmail:string,
  memberMobile:string
}

@Component({
  selector: 'app-search-notaries-surveyors',
  templateUrl: './search-notaries-surveyors.component.html',
  styleUrls: ['./search-notaries-surveyors.component.css']
})
export class SearchNotariesSurveyorsComponent implements OnInit {

  memberRecords: Member[] = [];
  selectedMember: Member;

  searchMembersForm = new FormGroup({
    search_input: new FormControl('')
  });

  constructor(private memService: MemberService) { }

  ngOnInit() { }

  isMemberRecordEmpty() {
    return this.memberRecords.length == 0
  }

  search() {
    this.memberRecords = [];
    this.memService.searchMembersByIdOrNIC(this.searchMembersForm.value.search_input).subscribe((records:any) => {
      records.forEach(record => {
        let x: Member = {
          memberId: record.id,
          memberName: record.fname + " " + record.lname,
          memberType: record.type,
          memberAddress: record.postal_address,
          memberEmail: record.email_address,
          memberMobile: record.mobile_no,
          memberNIC: record.nic_no,
          memberRLR: record.rlr_id,
          memberRegDate: record.reg_date
        }
        this.memberRecords.push(x);
      });
    })
  }

  setSelectedMember(member:Member) {
    this.selectedMember = member;
  }
}
