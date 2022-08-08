import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from '../Product/icategory';
import { IProduct } from '../Product/iproduct';
import { IProductP } from '../Product/iproduct-p';
import { ProductService } from '../Product/_product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  product?: IProduct;
  allCategory?: ICategory[];

  productForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    category_id: new FormControl('', Validators.required),
  });

  constructor(
    private productservice: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.productservice.getProductById(params['id']).subscribe((n: any) => {
          this.product = n;
          this.setupForm(n);
        });
      }
    });
  }

  ngOnInit(): void {
    this.productservice
      .getAllCategory()
      .subscribe((n) => (this.allCategory = n));
  }

  setupForm(data: any) {
    this.productForm = new FormGroup({
      name: new FormControl(
        data && data.name ? data.name : '',
        Validators.required
      ),
      description: new FormControl(
        data && data.description ? data.description : '',
        Validators.required
      ),
      image: new FormControl(
        data && data.image ? data.image : '',
        Validators.required
      ),
      price: new FormControl(
        data && data.price ? data.price : '',
        Validators.required
      ),
      category_id: new FormControl(
        data && data.category_id ? data.category_id : '',
        Validators.required
      ),
    });
    console.log(data);
  }

  updateData() {
    console.log(this.productForm.value);
    this.productservice
      .updateProduct(this.product!.id, this.productForm.value)
      .subscribe({
        next: (product) => {
          console.log(product);
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
