import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { AppState } from '../appstate.interface';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { ADD_TO_CART } from '../actions/cart.actions';

@Component({
  selector: 'app-products',
  template: `
    <div class="container">
      <div class="row">
        <div *ngFor="let p of products" class="col-md-4 d-flex align-items-stretch">
          <div class="card card-cascade">
            
            <div class="card-body">
            <img class="img-fluid" [src]="p.image_url" width="50" style="float:left;padding-right:15px">
              <h4 class="card-title"><a class="nav-link" routerLink="/products/{{p.id}}">{{p.name}}</a></h4>
              <p class="card-text"><small class="text-muted">ABV: {{p.abv}}</small></p>
              <p class="card-text">{{p.description}}</p>
              <p class="card-text"><a class="nav-link" routerLink="/products/{{p.id}}">More Info</a><p>

              <button class="btn btn-primary" (click)="addToCart(p)">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService, private store: Store<AppState>) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((products) => this.products = products);
  }

  addToCart(product) {
    this.store.dispatch({ type: ADD_TO_CART, payload: { product } });
  }

}
