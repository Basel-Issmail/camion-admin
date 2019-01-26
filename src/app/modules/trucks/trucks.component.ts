import { Component, OnInit } from '@angular/core';
import { tableConfig } from './config/trucks-config';
import { TrucksService } from './trucks.service';
import { Action } from 'src/app/shared/models/Action';
import { Subscription } from 'rxjs';
import { ActionEventsService } from 'src/app/shared/components/table/action-events.service';

@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.scss']
})
export class TrucksComponent implements OnInit {

  tableConfig = tableConfig;
  tableContent;
  subscriptions: Subscription[] = [];
  constructor(private trucksService: TrucksService, private actionEventsService: ActionEventsService) { }

  ngOnInit() {
    document.querySelector('mat-ink-bar').style.backgroundColor = '#1e88e5';
    this.trucksService.getTrucks({ page: 0, limit: 20 }).subscribe(
      data => {
        this.tableContent = Object.assign({}, this.trucksService.flattenObjectRows(data));
      }
    );



    /**
 * subscribe to actions events
 */
    this.subscriptions.push(this.actionEventsService.onTableContentAction$.subscribe(
      entry => {
        const ids = entry['ids'];
        const params = entry['params'];
        const tabType = entry['params']['tab'];
        let observableAction = null;
        const message = null;

        switch (entry['action']) {
          case Action.Paginate:
            observableAction = this.trucksService.getTrucks(params);
            break;
          default:
            break;
        }
        if (observableAction !== null) {
          observableAction.subscribe(data => {
            this.tableContent = Object.assign({}, this.trucksService.flattenObjectRows(data));

          },
            error => {

            console.log('error');

            },
          );
        }
      }
    ));
  }

}
