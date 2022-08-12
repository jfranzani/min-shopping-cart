
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../core/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  @Injectable()
  public baseUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}`);
  }

}
