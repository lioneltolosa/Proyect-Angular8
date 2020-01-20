import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class InterceptorsService implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {  
        // console.log('Ha pasado por el interceptor');

        //throw new Error("Method not implemented.");
        
        const headers = new HttpHeaders({
            'token-user': 'ABDDJODJSK23IJ3L4J3LJ'
        });

        const reqClone = req.clone({
            headers
        });

        return next.handle( reqClone ).pipe(
            catchError(this.errorHandler)
        )
    }

    errorHandler(error: HttpErrorResponse) {
        console.log('Sucedio un error');
        console.warn(error)
        return throwError('Error Personalizado')
    }
}
