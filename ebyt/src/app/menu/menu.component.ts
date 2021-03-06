import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { MenuItem } from 'primeng/components/common/menuitem';
import { Item } from '../item';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  role: string;
  authenticated: boolean;
  lastname: string;
  firstname: string;
  items:MenuItem[];
  cart: Array<Item>;
  id:string;
  total: number;
  item: Item;
  tot: number;
  

  constructor(private userService: UserService, private cartService: CartService) {
    userService.identifiant$.subscribe(() => {
      if (sessionStorage.getItem('username')){
        this.authenticated = true;
        this.role = sessionStorage.getItem('role');
        this.firstname = sessionStorage.getItem('firstname');
        this.lastname = sessionStorage.getItem('lastname');
        this.id = sessionStorage.getItem('id');
      }
    })
  }
    
  ngOnInit() {
    this.role = sessionStorage.getItem('role');
    this.cart = this.cartService.loadCart();
    if(sessionStorage.getItem('username')) {
      this.authenticated = true;
      this.firstname = sessionStorage.getItem('firstname');
      this.lastname = sessionStorage.getItem('lastname');
      this.id = sessionStorage.getItem('id');
    }
    this.items = [
      {label: 'Concerts', routerLink: ['/admin/concerts']
    },
    {label: 'Users', routerLink: ['/admin/users']
  },
  {label: 'Commandes', routerLink: ['/admin/commandes']},
];
this.tot = this.cartService.totalTotal;
}

logout() {
  this.userService.logout();
  this.authenticated = false;
  this.role = null;
}

}
