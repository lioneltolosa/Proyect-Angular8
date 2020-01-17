import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
    selector: 'app-rxjs',
    templateUrl: './rxjs.component.html',
    styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit, OnDestroy {

    subscripciion: Subscription;

    constructor() {
        this.subscripciion = this.returnObservable()
        
        /* .pipe(
            retry(2)
        ) */

        .subscribe( 
            number => console.log('Subscription', number),    // next()
            error => console.error('Error en el obs', error), // error
            () => console.log('El observer ya termino')       // complete()
        );
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        console.log('La pagina se va a cerrar')
        this.subscripciion.unsubscribe();
    }

    returnObservable(): Observable<any>{
        return new Observable((observer : Subscriber<any>) => {
            let contador = 0;
            
            let intervalo = setInterval(() => {
                contador ++;

                const salida = {
                    valor: contador
                }

                observer.next(salida);

                if(contador === 3) {
                    clearInterval(intervalo)
                    observer.complete();
                }

                /* if(contador === 2) {
                    observer.error('Help!!');
                } */
            }, 1000)
        }).pipe(
            map( resp => resp.valor),
            filter( (value, index) => {
                /* console.log('value', value);
                console.log('index', index);
                return true; */

                if( (value % 2) === 1 ) {
                    return true
                } else {
                    return false
                }
            })
        )
    }

}
