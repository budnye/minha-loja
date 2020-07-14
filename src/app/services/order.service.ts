import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private URI = 'http://localhost:8080/api-loja/resources/orders';

  constructor(private httpClient: HttpClient) { }

  getOrders() {
    return this.httpClient.get<Order[]>(this.URI);
  }

  delete(order: Order) {
    return this.httpClient.delete<Order[]>(`${this.URI}/${order.id}`);
  }

  getOrderInfo(order: Order) {
    return this.httpClient.get<Client[]>(`${this.URI}/${order.id}`);
  }

  private add(order: Order) {
    return this.httpClient.post(this.URI, order);
  }

  private update(order: Order) {
    return this.httpClient.put(`${this.URI}/${order.id}`, order);
  }

  save(order: Order) {
    if (order.id) {
      return this.update(order);
    } else {
      return this.add(order);
    }
  }
}
