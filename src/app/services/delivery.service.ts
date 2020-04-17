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

}
