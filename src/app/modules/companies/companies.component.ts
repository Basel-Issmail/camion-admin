import { Component, OnInit } from '@angular/core';
import { tableConfig } from './config/companies-config';
import { Subscription } from 'rxjs';
import { ActionEventsService } from 'src/app/shared/components/table/action-events.service';
import { CompaniesService } from './companies.service';

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

    this.companiesService.getCompanies({ page: 0, limit: 20 }).subscribe(
      data => {
        this.tableContent = Object.assign({}, this.companiesService.flattenObjectRows(data));
      }
    );
  }

}
