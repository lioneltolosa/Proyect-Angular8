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
        this.returnObservable().pipe(
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

    returnObservable(): Observable<number>{
        return new Observable(observer => {
            let contador = 0;
            
            let intervalo = setInterval(() => {
                contador ++;
                observer.next( contador );

                if(contador === 3) {
                    clearInterval(intervalo)
                    observer.complete();
                }

                if(contador === 2) {
                    observer.error('Help!!');
                }
            }, 1000)
        });
    }

}
