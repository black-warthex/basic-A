import { Component } from '@angular/core';

@Component({
   selector: 'app-hero',
   templateUrl: 'hero.component.html'
})

export class HeroComponent {

   name = 'IronMan';
   edad = 45;

   //ver html - se aconseja
   //get simula propiedad
   get nameInMayus(): string{
      return this.name.toUpperCase();
   }


   getName():string{
      return `${this.name} - ${this.edad}`;
   }

   changeName():void{
      this.name = 'Pepe Stark';
   }

   changeAge():void{
      this.edad = 100;
   }

}
