import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  public isLoading = false;

  setLoading(value: boolean) {
    this.isLoading = value;
  }
  constructor() { }
}
