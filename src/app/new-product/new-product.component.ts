import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ICategory } from '../Product/icategory';
import { IProduct } from '../Product/iproduct';
import { IProductP } from '../Product/iproduct-p';
import { ProductService } from '../Product/_product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  newProduct?: IProductP
  allProducts!: IProduct[]
  newId!: number
  allCategory!: ICategory[]

  productForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    category_id: new FormControl('', Validators.required)
  })

  constructor(private productservice: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productservice.getAllProducts().subscribe(n => this.allProducts = n);
    this.productservice.getAllCategory().subscribe(n => this.allCategory = n);
  }

  get name(){
    return this.productForm.get('name') as FormControl
  }
  get description(){
    return this.productForm.get('description') as FormControl
  }
  get image() {
    return this.productForm.get('image') as FormControl
  }
  get price() {
    return this.productForm.get('price') as FormControl
  }
  get category_id(){
    return this.productForm.get('category_id') as FormControl 
  }

  sendData() {
    this.newProduct =
    {
      name: this.productForm.value['name'] as string,
      price: this.productForm.value['price'] as unknown as number,
      image: this.productForm.value['image'] as string,
      description: this.productForm.value['description'] as string,
      category_id: this.productForm.value['category_id'] as unknown as number
    }
    console.log(this.newProduct)
    
    this.productservice.addNewProduct(this.newProduct).subscribe({
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
