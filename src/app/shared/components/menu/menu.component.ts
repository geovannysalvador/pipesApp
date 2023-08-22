import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  public menuItems: MenuItem[] = [];

    ngOnInit() {
        this.menuItems = [
            {
                label: 'pipes de Angular',
                icon: 'pi pi-fw pi-plus',
            },
            {
                label: 'Delete',
                icon: 'pi pi-fw pi-trash'
            },
            {
              label: 'open',
              icon: 'pi pi-fw pi-download',
            },
            {
            label: 'undo',
            icon: 'pi pi-fw pi-refresh',
            },
        ];
    }
}
