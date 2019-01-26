import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from 'src/config/api';

@Injectable({
  providedIn: 'root'
})
export class TrucksService {

  constructor(private http: HttpClient) { }

  getTrucks(params = {}) {
    const url = api.TRUCKS_LIST;
    return this.http.get<any[]>(url, { params });
  }

  flattenObjectRows(data) {
    data['rows'].forEach(truck => {
      truck['truckId'] = truck['id'];
      truck['id'] = truck['user']['id'];
      truck['approved'] = truck['user']['approved'];
      truck['email'] = truck['user']['email'];
      truck['telephone'] = truck['user']['telephone'];
    });
    return data;
  }
}
