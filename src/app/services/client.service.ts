import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private URI = 'http://localhost:8080/api-loja/resources/clients';

  constructor(private httpClient: HttpClient) { }

  getClients() {
    return this.httpClient.get<Client[]>(this.URI);
  }

  delete(client: Client) {
    return this.httpClient.delete<Client[]>(`${this.URI}/${client.id}`);
  }

  getClientInfo(client: Client) {
    return this.httpClient.get<Client[]>(`${this.URI}/${client.id}`);
  }

  private add(client: Client) {
    return this.httpClient.post(this.URI, client);
  }

  private update(client: Client) {
    return this.httpClient.put(`${this.URI}/${client.id}`, client);
  }

  save(client: Client) {
    if (client.id) {
      return this.update(client);
    } else {
      return this.add(client);
    }
  }
}
