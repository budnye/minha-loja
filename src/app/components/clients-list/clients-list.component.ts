import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ClientService } from 'src/app/services/client.service';


@Component({
  selector: 'clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss'],
})
export class ClientsListComponent implements OnInit {
  clients: any[];
  constructor(
    private loadingController: LoadingController,
    private clientsService: ClientService,
  ) { }

  async listar() {
    const loading = await this.loadingController.create({
      message: 'Carregando...',
    });
    loading.present();
    this.clientsService.getClients().subscribe((data) => {
      this.clients = data;
      loading.dismiss();
    });
  }

  ngOnInit() {
    this.listar();
  }

}
