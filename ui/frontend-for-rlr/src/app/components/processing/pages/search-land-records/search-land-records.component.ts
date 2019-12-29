import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

interface Land {
  landId: string,
  landOwner:string,
  landExtent:number
}

@Component({
  selector: 'app-search-land-records',
  templateUrl: './search-land-records.component.html',
  styleUrls: ['./search-land-records.component.css']
})
export class SearchLandRecordsComponent implements OnInit {

  landRecords: Land[] = [];

  searchLandRecordsForm = new FormGroup({});

  constructor() { }

  ngOnInit() {
    let x:Land = {
      landId: '112233',
      landOwner: 'Ravindu Sachintha',
      landExtent: 120
    }
    this.landRecords.push(x);
    // this.landRecords.push(x);
    // this.landRecords.pop();
  }

  isLandRecordEmpty() {
    return this.landRecords.length == 0
  }

}
