import {Injectable} from '@angular/core';
import {Customer} from "../../model/customer/customer";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private API = "http://localhost:3000/customes";

  constructor(private httpClient: HttpClient) {
  }


  // @ts-ignore
  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API)
  }

  deleteCustomer(id: number): Observable<Customer> {
    return this.httpClient.delete<Customer>(this.API + '/' + id)
  }

  addCustomer(customer: Customer):Observable<Customer[]>{
    return  this.httpClient.post<Customer[]>(this.API,customer)
  }
  // @ts-ignore
  findById(id: number): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(this.API+'/'+id)
  }

  updateCustomer(id: number,customer: Customer): Observable<Customer[]>{
  return this.httpClient.patch<Customer[]>(this.API + '/'+id,customer)
  }

}
