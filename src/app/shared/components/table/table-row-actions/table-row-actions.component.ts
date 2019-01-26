import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Action } from '../../../models/Action';
import { ActionEventsService } from '../action-events.service';

@Component({
  selector: 'app-table-row-actions',
  templateUrl: './table-row-actions.component.html',
  styleUrls: ['./table-row-actions.component.css']
})
export class TableRowActionsComponent {
  @Input() selectedId;
  @Input() row = {};
  @Input() displayedActions: Action[] = [];
  @Output() actionEmitter = new EventEmitter();
  @Input() header = false;
  rowId = this.row || 0;

  action = Action;

  constructor(private actionEventsService: ActionEventsService) { }

  emitAction(ids, action) {
    this.actionEmitter.emit({ action, ids });
  }

}
