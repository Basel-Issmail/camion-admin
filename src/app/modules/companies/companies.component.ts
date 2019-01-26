import { Component, OnInit } from '@angular/core';
import { tableConfig } from './config/companies-config';
import { Subscription } from 'rxjs';
import { ActionEventsService } from 'src/app/shared/components/table/action-events.service';
import { CompaniesService } from './companies.service';
import { Action } from 'src/app/shared/models/Action';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  tableConfig = tableConfig;
  tableContent;
  subscriptions: Subscription[] = [];
  constructor(private companiesService: CompaniesService, private actionEventsService: ActionEventsService) { }

  ngOnInit() {
    (<HTMLElement>document.querySelector('mat-ink-bar')).style.backgroundColor = '#e07000';
    this.companiesService.getCompanies({ page: 0, limit: 20 }).subscribe(
      data => {
        this.tableContent = Object.assign({}, this.companiesService.flattenObjectRows(data));
      }
    );

    /**
     * subscribe to actions events
     */
    this.subscriptions.push(this.actionEventsService.onTableContentAction$.subscribe(
      entry => {
        const ids = entry['ids'];
        const params = entry['params'];
        let observableAction = null;
        const message = null;
        switch (entry['action']) {
          case Action.Paginate:
            observableAction = this.companiesService.getCompanies(params);
            break;
          default:
            break;
        }
        if (observableAction !== null) {
          observableAction.subscribe(data => {
            this.tableContent = Object.assign({}, this.companiesService.flattenObjectRows(data));

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
