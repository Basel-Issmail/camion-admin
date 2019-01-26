import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from 'src/config/api';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  activateUsers(ids) {
    const url = api.APPROVE;
    return this.http.put<any[]>(url, { ids, approved: true });
  }

  deactivateUsers(ids) {
    const url = api.APPROVE;
    return this.http.put<any[]>(url, { ids, approved: false });
  }
}
