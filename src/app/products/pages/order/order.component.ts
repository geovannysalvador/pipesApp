import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/heroe.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
})
export class OrderComponent {

  public isUpperCase:boolean = false;
  public orderBy?: keyof Hero;

  public heroes:Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Spiderman',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Green Lanter',
      canFly: true,
      color: Color.green
    },
    {
      name: 'Joker',
      canFly: false,
      color: Color.pink
    },
  ]

  toggleUpperCase():void{
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder( value:keyof Hero):void{
    this.orderBy = value;
  }

}
