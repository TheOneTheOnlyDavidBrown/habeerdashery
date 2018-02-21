import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import * as CartActions from './actions/cart.actions';
import { Product } from './product.model';
import { AppState } from './appstate.interface';
import { Store } from '@ngrx/store';

@Injectable()
export class ProductService {

  constructor(private http: Http, private store: Store<AppState>) { }

  extractData(res: Response) {
    return res.json();
  }
  extractDataFirstElement(res: Response) {
    return res.json()[0];
  }

  getProducts(): Observable<Product[]> {
    return this.http.get('https://api.punkapi.com/v2/beers')
      .map(this.extractData)
      .map((data) => {
        data.forEach(datum => datum.price = datum.abv*4); // nice semi-random price
        return data;
      });

  }

  getProduct(id): Observable<Product> {
    return this.http.get(`https://api.punkapi.com/v2/beers/${id}`)
      .map(this.extractDataFirstElement)
  }

}
