import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private URI = 'http://localhost:3000/clients';

  constructor(private httpClient: HttpClient) { }

  getClients() {
    return this.httpClient.get<Client[]>(this.URI);
  }

  delete(client) {
    return this.httpClient.delete<Client[]>(`${this.URI}/${client.id}`);
  }

  getClientInfo(client) {
    return this.httpClient.get<Client[]>(`${this.URI}/${client.id}`);
  }
}
