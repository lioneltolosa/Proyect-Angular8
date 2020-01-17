import { Component, OnInit } from '@angular/core';
import { Observable, interval, throwError, of } from 'rxjs';
import { mergeMap, retry } from 'rxjs/operators';

@Component({
    selector: 'app-rxjs',
    templateUrl: './rxjs.component.html',
    styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

    constructor() {
        /* const source = interval(1000);
        const example = source.pipe(
            mergeMap(val => {
                if(val > 5) {
                    return throwError('Error')
                }
                return of(val)
            }),
            retry(2)
        ); */

        let obs = new Observable((observer) => {

            let contador = 0;

            let intervalo = setInterval(() => {
                contador ++;
                observer.next( contador );
                // console.log('Contador Observable', contador)

                if(contador === 3) {
                    clearInterval(intervalo)
                    observer.complete();
                }

                if(contador === 2) {
                    // clearInterval(intervalo)
                    observer.error('Help!!');
                }
            }, 1000)
        });

        obs.pipe(
            retry(2)
        )
        .subscribe( 
            number => console.log('Subscription', number),    // next()
            error => console.error('Error en el obs', error), // error
            () => console.log('El observer ya termino')       // complete()
        );
    }



    ngOnInit() {
    }

}
