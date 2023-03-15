import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  item: Product = {};


  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.getAll();
  }


getAll() {
  this.productService.getAll().subscribe(next => {
    console.log(next);
    this.products = next;
  });
}

delete() {
    this.productService.deleteProduct(this.item.id).subscribe(next => {
      alert('xóa thành công');
      this.ngOnInit();
    });
}
}
