import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  heores: string[] = ['hulk', 'thor', 'etc', 'warthex'];
  deletehero:string ='';

  deleteHero():void{
    //shift-splice
    this.deletehero=this.heores.shift() || '';

  }
}