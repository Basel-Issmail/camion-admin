import { Component, OnInit } from '@angular/core';
import { tableConfig } from './config/trucks-config';
import { TrucksService } from './trucks.service';

@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.scss']
})
export class TrucksComponent implements OnInit {

  tableConfig = tableConfig;
  tableContent;

  constructor(private trucksService: TrucksService) { }

  ngOnInit() {

    this.trucksService.getTrucks().subscribe(
      data => {
        this.tableContent = Object.assign({}, this.trucksService.flattenObjectRows(data));
      }
    );
  }

}
