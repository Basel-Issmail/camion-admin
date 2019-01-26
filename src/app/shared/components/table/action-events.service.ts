import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionEventsService {
  constructor() { }

  onTableContentAction$ = new Subject();

  emitOnTableContentAction(entry) {
    this.onTableContentAction$.next(entry);
  }
}
