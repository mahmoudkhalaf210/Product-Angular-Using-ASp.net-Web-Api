import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../Product/iproduct';
import { ProductService } from '../Product/_product.service';

@Component({
  selector: 'app-fav-products',
  templateUrl: './fav-products.component.html',
  styleUrls: ['./fav-products.component.css']
})
export class FavProductsComponent implements OnInit {

  productsDetails: any = [];

  constructor(private productservice: ProductService) { 
  }

  ngOnInit(): void {
    this.productservice.getFavProducts().subscribe(n => this.productsDetails = n)
  }
  
}
