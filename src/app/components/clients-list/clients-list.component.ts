import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { ClientService } from 'src/app/services/client.service';
import { ClientsModalComponent } from 'src/app/components/clients-modal/clients-modal.component';




@Component({
  selector: 'clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss'],
})
export class ClientsListComponent implements OnInit {
  clients: any[];
  client: Client;

  constructor(
    private loadingController: LoadingController,
    private clientsService: ClientService,
    private modalController: ModalController
  ) { }

  async list() {
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
    this.list();
  }

  ionViewWillEnter() {
    this.list();
  }


  async newClientModal() {
    this.client = {
      id: null,
      name: '',
      cpf: '',
      birth: new Date(),
    };
    const modal = await this.modalController.create({
      component: ClientsModalComponent,
      componentProps: {
        client: this.client,
        isReadonly: false,
        isNew: true,
        listComponent: this
      }
    });
    return await modal.present();
  }
}
