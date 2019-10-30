import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../../Utils/animations';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-processing-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css'],
  animations: [ fadeAnimation ]
})
export class WindowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getRouterOutletState(o: RouterOutlet) {
    return o.isActivated ? o.activatedRoute : '';
  }
}
