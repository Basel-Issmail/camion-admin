import { Component, OnDestroy, OnInit, ViewChild, Input } from '@angular/core';
import { MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Subscription } from 'rxjs';
import { TableContentConfig } from '../models/table-content-config';
import { ActionEventsService } from '../action-events.service';
import { Action } from 'src/app/shared/models/Action';

@Component({
  selector: 'app-table-content',
  templateUrl: './table-content.component.html',
  styleUrls: ['./table-content.component.css']
})
export class TableContentComponent implements OnInit, OnDestroy {
  @Input() tableContentConfig: TableContentConfig;
  @Input() tableContentData;
  @Input() showPagination = true;
  @Input() showHeaderActions = true;

  @ViewChild(MatSort) sort: MatSort;

  selection = new SelectionModel<number>(true, []);

  selectedId: number;

  index;

  filteredValue = '';

  displayedColumnsCopy = [];

  subscriptions: Subscription[] = [];

  sourceRow = null;

  destRow = null;

  constructor(private actionEventsService: ActionEventsService) {
  }

  ngOnInit() {
    this.resetDisplayedColumns();
    this.index = this.tableContentConfig.index;
    this.addActionsSpecialLabelColumns();

    /**
        * subscribe to sort event
        */
    this.subscriptions.push(this.sort.sortChange.subscribe(
      () => {
        const params = this.getParams();
        this.emitAction({ action: Action.Paginate, ids: [] });
      }
    ));
  }

  page(event) {
    this.setParams((event.pageIndex + 1), event.pageSize);
    const params = this.getParams();
    this.emitAction({ action: Action.Paginate, ids: [] });
  }

  applyFilter(value) {
    this.filteredValue = value.trim();
    const params = this.getParams();
    this.emitAction({ action: Action.Paginate, ids: [] });
  }

  /**
   * selection methods
   */
  isAllSelected() {
    if (!this.tableContentData) { return false; }
    return (this.selection.selected.length === this.tableContentData.rows.length && this.tableContentData.rows.length > 0);
  }

  selectAll() {
    if (!this.tableContentData) { return false; }
    this.tableContentData.rows.forEach(row => this.selection.toggle(row.id));
  }

  clearAll() {
    this.selection.clear();
  }

  toggle(row) {
    this.selection.toggle(row.id);
  }

  masterToggle(ref) {
    if (this.selection.selected.length === 0) {
      this.selectAll();
    } else {
      ref.checked = false;
      this.clearAll();
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  selectColumn(col: string, checkbox) {
    if (!checkbox.checked) {
      this.displayedColumnsCopy = this.displayedColumnsCopy.filter(
        column => column !== col
      );
    } else {
      this.displayedColumnsCopy.push(col);
      this.displayedColumnsCopy = this.tableContentConfig.displayCols.COLS.filter((item) => this.displayedColumnsCopy.includes(item));
      this.addActionsSpecialLabelColumns();
    }

  }

  addActionsSpecialLabelColumns() {
    this.displayedColumnsCopy.unshift(...this.tableContentConfig.specialLabels);
    if (this.showHeaderActions) {
      this.displayedColumnsCopy.unshift('select');
    }
    this.displayedColumnsCopy.push('actions');
  }

  resetDisplayedColumns() {
    this.displayedColumnsCopy = [...this.tableContentConfig.displayCols.DISPLAYED_COLS];
  }

  getParams() {
    const params = {
      limit: (this.tableContentData && this.tableContentData.per_page) ? this.tableContentData.per_page : 50,
      offset: (this.tableContentData && this.tableContentData.current_page) ? this.tableContentData.current_page : 1,
      tab: this.tableContentConfig.tabType,
      onField: this.sort.active || '',
      sort: this.sort.direction || ''
    };
    return params;
  }

  setParams(page, pageSize) {
    this.tableContentData.current_page = page;
    this.tableContentData.per_page = pageSize;
  }
  addNewItem() {
    this.emitAction({ action: Action.Add, ids: [] });
  }

  emitAction({ ids, action }) {
    const params = this.getParams();
    this.clearAll();
    this.actionEventsService.emitOnTableContentAction({ action, ids, params });
  }
}
