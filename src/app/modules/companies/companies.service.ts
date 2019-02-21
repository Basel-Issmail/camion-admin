import { Injectable } from '@angular/core';
import { api } from 'src/config/api';
import { HttpClient } from '@angular/common/http';
import { itianLanguage } from 'src/config/translate';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http: HttpClient) { }

  getCompanies(params = {}) {
    const url = api.COMPANIES_LIST;
    return this.http.get<any[]>(url, { params });
  }

  searchCompanies(query, field) {
    const filters = {};
    filters[field] = query;

    const url = api.COMPANIES_LIST;
    return this.http.get<any[]>(url, { params: filters });
  }

  flattenObjectRows(data) {
    data['rows'].forEach(company => {
      company['carBrand'] = this.getStringFromObj(company['carBrand']);
      company['language'] = this.getStringFromObj(company['language']);
      company['serviceType'] = this.getStringFromObj(company['serviceType']);
      company['companyId'] = company['id'];
      company['id'] = company['user']['id'];
      company['approved'] = company['user']['approved'];
      company['email'] = company['user']['email'];
      company['telephone'] = company['user']['telephone'];
    });
    return data;
  }

  getStringFromObj(propertyObj) {
    const resultArr = [];
    for (const key in propertyObj) {
      if (propertyObj[key] === true) {
        resultArr.push(this.translate(key));
      } else if (key === 'rescue' && propertyObj[key] && propertyObj[key] !== 'NO') {
        resultArr.push(this.translate(propertyObj[key]));
      }
    }
    return resultArr.join(', ');
  }

  translate(key) {
    return (itianLanguage[key]) ? itianLanguage[key] : key;
  }

}
