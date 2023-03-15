import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductListComponent} from "../component/product-list/product-list.component";
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private API = "http://localhost:3000/products"
  constructor(private  httpClient: HttpClient) { }

  // @ts-ignore
  getAll(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.API)
  }

}
