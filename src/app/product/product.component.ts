import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe } from '@angular/common';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { AppState } from '../appstate.interface';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cart.actions';

@Component({
  selector: 'app-product',
  template: `
<div class="container" *ngIf="product?.name">
  <div class="row">
    <div class="col-md-12 d-flex align-items-stretch">
      <div class="card card-cascade">
        
        <div class="card-body">
        <img class="img-fluid" [src]="product?.image_url" width="50" style="float:left;padding-right:15px">
          <h4 class="card-title"><a class="nav-link">{{product?.name}}</a></h4>
          <p class="card-text"><small class="text-muted">ABV: {{product?.abv}}</small></p>
          <p class="card-text">{{product?.description}}</p>

          <button class="btn btn-primary" (click)="addToCart(product)">Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</div>`,
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  id : string;
  product: Product;

  constructor(private route: ActivatedRoute, private productService: ProductService, private store: Store<AppState>) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.productService.getProduct(this.id).subscribe((product) => this.product = product);
  }

  addToCart(product) {
    this.store.dispatch({ type: ADD_TO_CART, payload: { product } });
  }
}
