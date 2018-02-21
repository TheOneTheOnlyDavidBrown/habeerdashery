import { Component, OnInit } from '@angular/core';
import { AppState } from '../appstate.interface';
import { Store } from '@ngrx/store';
import { CartItem } from '../cartItem.model';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent implements OnInit {
  products: Observable<CartItem[]>

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.products = this.store.select('cart');
  }

  totalQuantity(cart = []) {
    if (!cart.length) return 0;
    return cart.map((c) => (c.quantity)).reduce((a,b) => a+b);
  }

}
