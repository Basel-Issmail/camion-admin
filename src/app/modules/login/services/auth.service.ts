import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import * as moment from 'moment';
import { api } from 'src/config/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInObs = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) { }

  login(user: any) {
    return this.http.post<any>(api.LOGIN, user)
      .pipe(tap(res => this.setSession(res)), shareReplay());
  }

  private setSession(authResult) {
    const expiresAt = moment().add(authResult.expiresIn, 'days');
    this.loggedInObs.next(true);
    localStorage.setItem('token', authResult.token);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');
    this.loggedInObs.next(false);
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  get isloggedInObs() {
    if (moment().isBefore(this.getExpiration())) {
      this.loggedInObs.next(true);
    } else {
      this.loggedInObs.next(false);
    }
    return this.loggedInObs.asObservable();
  }
}
