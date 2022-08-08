import { Component } from '@angular/core';
import { IProduct } from './Product/iproduct';
import { ProductService } from './Product/_product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'event';
}
