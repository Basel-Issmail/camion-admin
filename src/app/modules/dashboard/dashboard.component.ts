import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { client } from 'src/config/client';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  currentIndex = 0;
  client = client;
  constructor(public spinnerService: SpinnerService) { }

  ngOnInit() {
  }

  tabChange($event) {
    const colors = ['#1e88e5', '#e07000', '#871F78', '#757575', '#d93025', '#3F704D', '#fff00f'];
    this.currentIndex = $event.index;

    // @ts-ignore
    document.querySelector('mat-ink-bar').style.backgroundColor = colors[this.currentIndex];

  }

}
