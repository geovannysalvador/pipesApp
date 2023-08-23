import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18n Select
  public name:string = 'Geovanny';
  public gender: 'male' | 'female' = 'male';
  public invitacionMap ={
    male: 'invitarlo',
    female: 'invitarla',
  }

  changeClient():void{
    this.name = "Liz";
    this.gender = 'female';

  }

  //i18n plural pipe
  public clients: string[] = ['Jonathan ', 'Alexander ', 'Josue ', 'Douglas ', 'Melisa ']

  public clientsMap ={
    '=0': 'no hay pedidos.',
    '=1': 'tenemos 1 pedido por enviar',
    'other': 'tenemos # pedidos por enviar',
  }

  deleteClient():void{
    this.clients.shift();
  }

  //key value pipe

  public person = {
    name: 'Geovanny',
    number: "12457544",
    address: 'Hoston'
  }

  //Async pipe
  public myObservableTimer:Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap:', value))
  );

  public promiseValue: Promise<string> =  new Promise((resolve, reject) =>{
    setTimeout(() =>{
      resolve('Tenemos data en la promesa')
    },3500);
  })

}
