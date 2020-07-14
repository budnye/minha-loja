import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private URI = 'http://localhost:8080/api-loja/resources/products';

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    return this.httpClient.get<Product[]>(this.URI);
  }

  delete(product: Product) {
    return this.httpClient.delete<Product[]>(`${this.URI}/${product.id}`);
  }

  getProductInfo(product: Product) {
    return this.httpClient.get<Product[]>(`${this.URI}/${product.id}`);
  }

  private add(product: Product) {
    return this.httpClient.post(this.URI, product);
  }

  private update(product: Product) {
    return this.httpClient.put(`${this.URI}/${product.id}`, product);
  }

  save(product: Product) {
    if (product.id) {
      return this.update(product);
    } else {
      return this.add(product);
    }
  }
}
