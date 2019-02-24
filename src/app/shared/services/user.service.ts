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

  deleteUsers(ids) {
    const url = api.DELETE;
    return this.http.put<any[]>(url, { ids, deleted: true });
  }

  sendResetPasswordEmail(id) {
    const url = api.SEND_RESET_PASSWORD_EMAIL;
    return this.http.post<any[]>(url, { id });
  }
}
