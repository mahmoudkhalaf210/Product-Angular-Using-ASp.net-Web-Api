import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, observable, Observable, Subject } from 'rxjs';
import { IProduct } from './iproduct';
import { IProductP } from './iproduct-p';
import { ICategory } from './icategory';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productSubject = new Subject<IProduct>();
  favProducts: any = [];
  favProductsSubject = new BehaviorSubject<IProduct[]>(this.favProducts);
  products!: IProduct[];

  constructor(private hClient: HttpClient) {}

  getProductById(id: number): any {
    return this.hClient.get<IProduct>(`http://localhost:5136/Product/${id}`);
  }

  addNewProduct(product: IProductP) {
    return this.hClient.post('http://localhost:5136/Product', product);
  }

  updateProduct(id: number, product: any){
    console.log(product);
    return this.hClient.put(`http://localhost:5136/Product/${id}`, product);
  }

  deleteProduct(id: number){
    return this.hClient.delete(`http://localhost:5136/Product/${id}`);
  }

  getAllProducts() {
    return this.hClient.get<IProduct[]>('http://localhost:5136/Product');
  }

  getAllCategory(){
    return this.hClient.get<ICategory[]>('http://localhost:5136/api/Category');
  }

  addProduct(product: IProduct) {
    this.productSubject.next(product);
  }

  getProduct() {
    return this.productSubject.asObservable();
  }

  addToFav(product: IProduct) {
    this.favProducts.push(product);
    this.favProductsSubject.next(this.favProducts);
  }

  getFavProducts() {
    return this.favProductsSubject.asObservable();
  }
}
