import { Component, OnInit, Input } from '@angular/core';
import { ClientsModalComponent } from '../clients-modal/clients-modal.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'clients-list-item',
  templateUrl: './clients-list-item.component.html',
  styleUrls: ['./clients-list-item.component.scss'],
})
export class ClientsListItemComponent implements OnInit {
  @Input() client: Client;
  constructor(public modalController: ModalController,
  ) { }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ClientsModalComponent,
      componentProps: {
        client: this.client,
        isReadonly: true,
        isNew: false,
      }
    });
    return await modal.present();
  }
  ngOnInit() { }

}
