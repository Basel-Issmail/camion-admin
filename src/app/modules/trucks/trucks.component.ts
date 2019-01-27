import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { tableConfig } from './config/trucks-config';
import { TrucksService } from './trucks.service';
import { Action } from 'src/app/shared/models/Action';
import { Subscription, concat, Observable, fromEvent } from 'rxjs';
import { ActionEventsService } from 'src/app/shared/components/table/action-events.service';
import { UserService } from 'src/app/shared/services/user.service';
import { last, distinctUntilChanged, map, switchMap, debounceTime, tap } from 'rxjs/operators';
import { MessageService } from 'src/app/shared/services/message.service';

@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.scss']
})
export class TrucksComponent implements OnInit, OnDestroy {
  @ViewChild('searchInput') searchInput;
  tableConfig = tableConfig;
  tableContent;
  criteria;
  keywords = '';
  subscriptions: Subscription[] = [];
  constructor(private trucksService: TrucksService, private actionEventsService: ActionEventsService,
    private userService: UserService, private messageService: MessageService) { }

  ngOnInit() {
    (<HTMLElement>document.querySelector('mat-ink-bar')).style.backgroundColor = '#1e88e5';
    this.trucksService.getTrucks({ page: 0, limit: 20 }).subscribe(
      data => {
        this.tableContent = Object.assign({}, this.trucksService.flattenObjectRows(data));
      }
    );

    // search
    fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => {
        console.log(this.criteria);
      }),
      map((event: any) => event.target.value),
      switchMap(query => this.trucksService.searchTrucks(query, this.criteria))
    ).subscribe(data => {
      this.tableContent = Object.assign({}, this.trucksService.flattenObjectRows(data));
    },
      error => {
        console.log(error);
        this.messageService.display('Something is wrong, Try later.',
          'danger', 'center', 'top');
      },
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
            observableAction = this.trucksService.getTrucks(params);
            break;
          case Action.Activate:
            observableAction = concat(this.userService.activateUsers(ids), this.trucksService.getTrucks(params)).pipe(last());
            break;
          case Action.Deactivate:
            observableAction = concat(this.userService.deactivateUsers(ids), this.trucksService.getTrucks(params)).pipe(last());
            break;
          default:
            break;
        }
        if (observableAction !== null) {
          observableAction.subscribe(data => {
            data.params = params;
            this.tableContent = Object.assign({}, this.trucksService.flattenObjectRows(data));
            if (entry['action'] !== Action.Paginate) {
              this.messageService.display('Trucks Updated Successfully');
            }
          },
            error => {
              console.log(error);
              this.messageService.display('Something is wrong, Try later.',
                'danger', 'center', 'top');
            },
          );
        }
      }
    ));
  }

  resetSearch() {
    console.log(this.keywords);

    this.keywords = '';

    console.log(this.keywords);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
