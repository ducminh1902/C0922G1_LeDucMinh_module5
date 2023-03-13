import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  productForm: FormGroup;
  mess;
  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private route: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      // tslint:disable-next-line:radix
      const id = parseInt(paramMap.get('id'));
      const product = this.productService.findById(id);
      this.productForm = new FormGroup({
        id: new FormControl(product.id),
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description),
      });
    });
  }

  submit() {
    const  product = this.productForm.value;
    this.productService.updateProduct(product.id, product);
    this.mess = 'chỉnh sửa thành công';
    this.productForm.reset();
    this.route.navigateByUrl('/product');
  }

}
