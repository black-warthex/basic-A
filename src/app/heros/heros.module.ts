import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';

@NgModule({
    //que contiene el modulo
    declarations:[
        HeroComponent,
        ListComponent
    ],
    //cosas visibles fuera del modulo
     exports:[
         ListComponent
     ],
     //aqui adentro van modulos, 
     imports:[
         //obligatorio->importa las directivas ngFor ngIf etc... si no se usa no importar
        CommonModule
     ]
})
export class HeroesModule{

}