import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UsuariosService {

    constructor(private http: HttpClient) { }

    getUsers() {
        let params = new HttpParams().append('page', '1');
        params = params.append('nombre', 'Lionel Tolosa');

        const headers = new HttpHeaders({
            'token-user': 'ABDDJODJSK23IJ3L4J3LJ'
        });

        return this.http.get('https://jsonplaceholder.typicode.com/posts', {
            params,
            headers
        }).pipe(
            map(resp => {
                return resp;
            }),
            catchError( this.errorHandler)
        )
    }

    errorHandler(error: HttpErrorResponse) {
        console.log('Sucedio un error');
        console.warn(error)
        return throwError('Error Personalizado')
    }
}
