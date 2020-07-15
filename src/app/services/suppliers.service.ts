import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {
  private URI = 'http://localhost:8081/api-loja/resources/suppliers';

  constructor(private httpClient: HttpClient) { }

  getSuppliers() {
    return this.httpClient.get<Supplier[]>(this.URI);
  }

  delete(supplier: Supplier) {
    return this.httpClient.delete<Supplier[]>(`${this.URI}/${supplier.id}`);
  }

  getClientInfo(supplier: Supplier) {
    return this.httpClient.get<Supplier[]>(`${this.URI}/${supplier.id}`);
  }

  private add(supplier: Supplier) {
    return this.httpClient.post(this.URI, supplier);
  }

  private update(supplier: Supplier) {
    return this.httpClient.put(`${this.URI}/${supplier.id}`, supplier);
  }

  save(supplier: Supplier) {
    if (supplier.id) {
      return this.update(supplier);
    } else {
      return this.add(supplier);
    }
  }
}
