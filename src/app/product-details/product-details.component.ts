import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../Product/iproduct';
import { ProductService } from '../Product/_product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productDetails: IProduct = {id: 0, name: "", price:0, description: "", image: "", category: "", category_id: 0};

  constructor(private activeRoute: ActivatedRoute, private productService: ProductService) {
    this.activeRoute.params.subscribe(params => {
      if (params['id']){ 
        console.log(params['id']);  
        this.productService.getProductById(params['id']).subscribe((n: any) => this.productDetails = n);
        console.log(this.productService.getProductById(params['id']))
      }
    })
  }

  ngOnInit(): void {
  }
}
