import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalController, LoadingController, AlertController, NavController } from '@ionic/angular';
import { ClientService } from 'src/app/services/client.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-clients-modal',
  templateUrl: './clients-modal.component.html',
  styleUrls: ['./clients-modal.component.scss'],
})
export class ClientsModalComponent implements OnInit {
  @Output() updateList = new EventEmitter();
  isReadonly: boolean;
  isNew: boolean;
  constructor(
    private modalController: ModalController,
    private loadingController: LoadingController,
    private clientService: ClientService,
    private alertController: AlertController,
    private navController: NavController,
    private activatedRoute: ActivatedRoute
  ) { }

  dismissModal() {
    this.modalController.dismiss({
      dismissed: true
    });
    this.updateList.emit();
  }
  editForm() {
    this.isReadonly = false;
  }
  async saveClient(client: Client) {
    // const loading = await this.busyLoader.create('Salvando cliente...');
    const loading = await this.loadingController.create({
      message: 'Salvando cliente...',
    });
    let alert = await this.alertController.create({
      header: 'Confirmação de finalização',
      message: `Deseja salvar as alterações no cliente ${client.name}?`,
      buttons: [{
        text: 'SIM',
        handler: () => {
          this.clientService
            .save(client)
            .subscribe(() => {
              loading.dismiss();
              this.navController.navigateForward(['/clientes'])
              this.dismissModal();
            });
        }
      }, {
        text: 'NÃO'
      }]
    });
    alert.present();
  }
  ngOnInit() { }

}
