import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ClientsModalComponent } from 'src/app/components/clients-modal/clients-modal.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {
  client: Client;
  constructor(private modalController: ModalController,
  ) {
    const newClient = {
      id: null,
      name: '',
      email: '',
      cpf: '',
      birth: new Date()
    };
    this.client = newClient;
  }

  async newClientModal() {
    const modal = await this.modalController.create({
      component: ClientsModalComponent,
      componentProps: {
        client: this.client,
        isReadonly: false,
        isNew: true,
      }
    });
    return await modal.present();
  }
  ngOnInit() {
  }

}
