import { Component, OnInit } from '@angular/core';
import { IProduct } from '../Product/iproduct';
import { ProductService } from '../Product/_product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) {}

  productList!: IProduct[];
  product!: IProduct;
  products: IProduct[] = [{id: 0, name: "", price:0, description: "", image: "", category: "", category_id: 0}];

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(n => this.productList  = n)
  }
}
