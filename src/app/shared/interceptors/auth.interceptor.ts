import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse,
    HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/modules/login/services/auth.service';
import { Router } from '@angular/router';
import { client } from 'src/config/client';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(public auth: AuthService, private router: Router) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                // do stuff with response if you want
            }
        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 401 || err.status === 403) {
                    // redirect to the login route
                    // or show a modal
                    this.router.navigate([client.LOGIN]);
                }
            }
        }));
    }
}
