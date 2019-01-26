import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/modules/login/services/auth.service';

@Injectable()
export class ToeknInterceptor implements HttpInterceptor {
    constructor(public auth: AuthService) { }
    intercept(req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {

        const idToken = localStorage.getItem('token');

        if (idToken && this.auth.isLoggedIn()) {
            const cloned = req.clone({
                headers: req.headers.set('Authorization',
                    'Camion ' + idToken)
            });
            return next.handle(cloned);
        }
        return next.handle(req);
    }
}
