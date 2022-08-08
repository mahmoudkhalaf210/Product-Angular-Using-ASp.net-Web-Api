import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../Product/iproduct';
import { ProductService } from '../Product/_product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() productData!: IProduct

  products!: IProduct;

  constructor(private product: ProductService, private router: Router) { }

  ngOnInit(): void {

  }

  sendProduct() {
    this.product.addProduct(this.productData);
  }

  sendToFav() {
    this.product.addToFav(this.productData);
  }

  delete(id: number){
    this.product.deleteProduct(id).subscribe({
      next: product => {
        console.log(product);
        this.router.navigate(['/home']);
      },
      error: err => {
      console.log(err);
      }
    })
  }

}
