import { EventEmitter } from '@angular/core';
import { Component, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent {
  //llega
  @Input() nuevo: Personaje = { nombre: '', poder: 0 };
  //emite eventos : emiter especifica el tipo
  //@Output() onNewCharacter: EventEmitter<Personaje> = new EventEmitter();
  /*
    agregar(event:any): void {
      //desactivar refrescar
      event.preventDefault();
      
      return console.log('her');
    }
  */
 constructor(private service: DbzService){}
  agregar(): void {

    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    this.service.agregarNuevoPersonaje(this.nuevo);
    this.nuevo = { nombre: '', poder: 0 };

  }
}
