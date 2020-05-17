import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { ClientService } from 'src/app/services/client.service';
import { ClientsModalComponent } from '../clients-modal/clients-modal.component';

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
    public modalController: ModalController) { }

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
  async presentModal() {
    const modal = await this.modalController.create({
      component: ClientsModalComponent,
      componentProps: {
        clients: this.clients
      }
    });
    return await modal.present();
  }
  ngOnInit() {
    this.listar();
  }

}
