import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';
@NgModule({
    //que contiene el modulo
    declarations:[
        ContadorComponent
    ]
    ,
    //visibles fuera del modulo
    exports:[
        ContadorComponent
    ]    
})

export class ContadorModule{

}