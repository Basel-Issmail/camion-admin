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
    data['rows'].forEach(company => {
      company['companyId'] = company['id'];
      company['id'] = company['user']['id'];
      company['email'] = company['user']['email'];
      company['telephone'] = company['user']['telephone'];
    });
    return data;
  }
}
