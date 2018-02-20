import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { Product } from './product.model';

@Injectable()
export class ProductService {

  constructor(private http: Http) { }

  extractData(res: Response) {
    return res.json();

  }

  getProducts(): Observable<Product[]> {
    return this.http.get('https://api.punkapi.com/v2/beers').map(this.extractData)
  }

  getProduct(id): Observable<Product> {
    return this.http.get(`https://api.punkapi.com/v2/beers/${id}`).map(this.extractData)
  }

}
