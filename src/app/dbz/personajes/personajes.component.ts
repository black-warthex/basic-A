import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent{  
//input este input viene desde el padre 
//nombre opcional en parentesis
//@Input('data') personajes: any [] =[];
//@Input() personajes: Personaje [] = [];

constructor(private service:DbzService){}

get personajes(){
  return this.service.personajes;
}

}
