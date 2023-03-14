import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // @ts-ignore
  private API = ' http://localhost:3000/products';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API);
  }

  saveProduct(product) {
    // @ts-ignore
    return this.httpClient.post<>(this.API, product);
  }

  // findById(id: number) {
  //   return this.getAll().find(item => item.id === id);
  // }

  //
  // updateProduct(id: number, product: Product) {
  //   for (let i = 0; i < this.products.length ; i++) {
  //     if (this.products[i].id === id) {
  //         this.products[i] = product;
  //         break;
  //     }
  //   }
  // }

  delete(id: number): Observable<Product[]> {
    return this.httpClient.delete<Product[]>(this.API + '/' + id);
  }

  findById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.API + '/' + id);
  }

  updateProduct(id: number, product: Product) {
    return this.httpClient.patch(this.API + '/' + id, product );
  }
}
