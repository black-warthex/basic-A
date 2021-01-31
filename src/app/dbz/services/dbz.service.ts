import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService {

    //orden propiedades - get and sett - constructor - metodos


    //volver privado un atributo el estandar es con _name    
    private _personajes: Personaje[] = [{
        nombre: 'Goku',
        poder: 15000
    },
    {
        nombre: 'Vegeta',
        poder: 7000
    }
    ];

    //buenas practcas
    get personajes(): Personaje[] {
        // [] => indican el arreglo
        // ... operador spread
        return [...this._personajes];
    }

    constructor() { }

    agregarNuevoPersonaje(personaje: Personaje): void {
        // debugger; depurar pausa
        this._personajes.push(personaje);
    }
}