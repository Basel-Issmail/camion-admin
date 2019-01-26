import { Injectable } from '@angular/core';
import { api } from 'src/config/api';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http: HttpClient) { }

  getCompanies(params = {}) {
    const url = api.COMPANIES_LIST;
    return this.http.get<any[]>(url, { params });
  }

  flattenObjectRows(data) {
    data['rows'].forEach(truck => {
      truck['email'] = truck['user']['email'];
      truck['telephone'] = truck['user']['telephone'];
    });
    return data;
  }
}
