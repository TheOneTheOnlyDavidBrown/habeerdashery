import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';
import { CartItem } from '../cartItem.model';
import { REMOVE_FROM_CART, UPDATE_QUANTITY } from '../actions/cart.actions';
import { AppState } from '../appstate.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-shopping-cart',
  template: `
    <table id="cart" class="table table-hover table-condensed">
        <thead>
        <tr>
          <th style="width:50%">Product</th>
          <th style="width:10%">Price</th>
          <th style="width:8%">Quantity</th>
          <th style="width:22%" class="text-center">Subtotal</th>
          <th style="width:10%"></th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let cartItem of (cartItems | async)?.cart">
          <td data-th="Product">
            <div class="row">
              <div class="col-sm-2 hidden-xs"><img class="img-fluid" [src]="cartItem.product?.image_url" width="50" style="float:left">
              </div>
              <div class="col-sm-10">
                <h4 class="nomargin">{{cartItem.product.name}}</h4>
                <p>{{cartItem.product.description}}</p>
              </div>
            </div>
          </td>
          <td data-th="Price">{{cartItem.product.price | currency}}</td>
          <td data-th="Quantity">
            <input type="number" class="form-control text-center" [value]="cartItem.quantity" min="1" (input)="quantityChanged(cartItem.product, $event.target.value)">
          </td>
          <td data-th="Subtotal" class="text-center">{{cartItem.price * cartItem.quantity | currency}}</td>
          <td class="actions" data-th="">
            <button class="btn btn-danger btn-sm" (click)="removeProduct(cartItem)"><i class="fa fa-trash-o"></i></button>								
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr class="visible-xs">
          <td class="text-center"><strong>Total {{ calculateTotalOrderPrice((cartItems | async)?.cart) | currency }}</strong></td>
        </tr>
        <tr>
          <td><a href="#" class="btn btn-warning"><i class="fa fa-angle-left"></i> Continue Shopping</a></td>
          <td colspan="2" class="hidden-xs"></td>
          <td class="hidden-xs text-center"><strong>Total {{ calculateTotalOrderPrice((cartItems | async)?.cart) | currency }}</strong></td>
          <td><a href="#" class="btn btn-success btn-block">Checkout <i class="fa fa-angle-right"></i></a></td>
        </tr>
      </tfoot>
    </table>
  `,
  providers: [ProductService]
})
export class ShoppingCartComponent implements OnInit {
  cartItems: Observable<CartItem[]>;
  totalOrderPrice: number;

  constructor(private productService: ProductService, private store: Store<AppState>) { }

  ngOnInit() {
    this.cartItems = this.store.select('cart');
  }

  removeProduct(payload) {
    this.store.dispatch({ type: REMOVE_FROM_CART, payload });
  }

  calculateTotalOrderPrice(cartItems = []) {
    if (!cartItems || !cartItems.length) return 0;
    const rtn = cartItems
      .map((item) => (item.price*item.quantity)) // pulls price into array so it's easier to sum
      .reduce((a, b) => a + b);
    return rtn;
  }

  quantityChanged(product, quantity: number) {
    quantity = +quantity; // I feel like this shouldn't be needed in TS
    this.store.dispatch({ type: UPDATE_QUANTITY, payload: { product, quantity } });
  }

}

// <div class="container" *ngIf="products | async as p">###{{p | json}}

//   </div>