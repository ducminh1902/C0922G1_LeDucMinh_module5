import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
   categories: Observable<Category[]> = this.categoryService.getAll();
  mess;
  productForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  });
  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private route: Router,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      // tslint:disable-next-line:radix
      const id = parseInt(paramMap.get('id'));
      this.productService.findById(id).subscribe(next => {
        this.productForm.patchValue(next);
        console.log(next);
      });
    });
  }

  submit() {
    const  product = this.productForm.value;
    this.productService.updateProduct(product.id, product).subscribe(next => {
      this.mess = 'chỉnh sửa thành công';
      this.productForm.reset();
      this.route.navigateByUrl('/product');
    });
  }

}
