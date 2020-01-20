import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';

@Component({
    selector: 'app-interceptors',
    templateUrl: './interceptors.component.html',
    styleUrls: ['./interceptors.component.scss']
})
export class InterceptorsComponent implements OnInit {

    constructor(private usersService: UsuariosService) {
        this.usersService.getUsers().subscribe(data => {
            console.log('Users', data)
        }, (err) => {
            console.log('Error ??')
        })
    }

    ngOnInit() {
    }

}
