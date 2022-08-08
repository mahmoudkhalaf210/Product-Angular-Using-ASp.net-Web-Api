import { Component, OnInit } from '@angular/core';
import { IProduct } from '../Product/iproduct';
import { ProductService } from '../Product/_product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  titles: IProduct[] = [{id: 0, name: "", price:0, description: "", image: "", category: "", category_id: 0}];

  constructor(private productservice: ProductService) { }

  ngOnInit(): void {
    this.productservice.getProduct().subscribe(n => this.titles.push(n));
  }

}
