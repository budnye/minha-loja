import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  private URI = 'http://localhost:3000/deliveries';

  constructor(private httpClient: HttpClient) { }

  getDeliveries() {
    return this.httpClient.get<Delivery[]>(this.URI);
  }

  delete(delivery) {
    return this.httpClient.delete<Delivery[]>(`${this.URI}/${delivery.id}`);
  }

  getDeliveryInfo(delivery: Delivery) {
    return this.httpClient.get<Client[]>(`${this.URI}/${delivery.id}`);
  }

  private add(delivery: Delivery) {
    return this.httpClient.post(this.URI, delivery);
  }

  private update(delivery: Delivery) {
    return this.httpClient.put(`${this.URI}/${delivery.id}`, delivery);
  }

  save(delivery: Delivery) {
    if (delivery.id) {
      return this.update(delivery);
    } else {
      return this.add(delivery);
    }
  }

}
