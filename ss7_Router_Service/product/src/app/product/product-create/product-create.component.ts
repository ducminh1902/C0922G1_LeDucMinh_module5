import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  categories: Category[] = [];

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  });


  constructor(private productService: ProductService,
              private router: Router,
              private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(next => {
      this.categories = next;
    });
  }
  submit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product).subscribe(next => {
      this.productForm.reset();
      alert('ok');
      this.router.navigateByUrl('/product');
    });
  }

}
