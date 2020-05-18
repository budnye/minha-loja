import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { ClientService } from 'src/app/services/client.service';
@Component({
  selector: 'app-clients-modal',
  templateUrl: './clients-modal.component.html',
  styleUrls: ['./clients-modal.component.scss'],
})
export class ClientsModalComponent implements OnInit {
  isReadonly: boolean;
  constructor(private modalController: ModalController,
    private loadingController: LoadingController,
    private clientService: ClientService
  ) {
    this.isReadonly = true;
  }

  dismissModal() {
    this.modalController.dismiss({
      dismissed: true
    });
  }
  editForm() {
    this.isReadonly = false;
  }
  async saveClient(client: Client) {
    // const loading = await this.busyLoader.create('Salvando cliente...');

    this.clientService
      .save(client)
      .subscribe(() => {
        // loading.dismiss();
        this.dismissModal();
      });
  }
  ngOnInit() { }

}
