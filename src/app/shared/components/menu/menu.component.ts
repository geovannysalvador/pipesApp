import { isNgContainer } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  public menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-fw pi-desktop',
        items: [
          {
            label: 'textos y fechas',
            icon: 'pi pi-fw pi-align-left',
            routerLink: '/'
          },
          {
            label: 'numeros',
            icon: 'pi pi-fw pi-dollar',
            routerLink: 'numbers'
          },

          {
            label: 'No comunes',
            icon: 'pi pi-fw pi-globe',
            routerLink: 'uncommon'
          },
          {
            separator: true,
          },
        ],
      },
      {
        label: 'Pipes personales',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Personalizados',
            icon: 'pi pi-fw pi-palette',
            routerLink: 'custom'
          },
        ],
      },
      {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off',
      },
    ];
  }
}
