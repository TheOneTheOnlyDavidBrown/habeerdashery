import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  template: 'product! {{id}} {{ product[0].name  }}',
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  id : string;
  product: Product[];

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.productService.getProduct(this.id).subscribe((product) => this.product = product);
  }

}
