import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DateTransformService {

  constructor(private datePipe: DatePipe) { }

  transformDate(date, format = 'dd/MM/yyyy - HH:mm') {
    return this.datePipe.transform(date, format);
  }
}
