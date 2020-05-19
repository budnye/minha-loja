import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalController, LoadingController, AlertController, NavController, NavParams } from '@ionic/angular';
import { ClientService } from 'src/app/services/client.service';
@Component({
  selector: 'app-clients-modal',
  templateUrl: './clients-modal.component.html',
  styleUrls: ['./clients-modal.component.scss'],
})
export class ClientsModalComponent implements OnInit {

  isReadonly: boolean;
  isNew: boolean;
  listComponent: any;
  constructor(
    private modalController: ModalController,
    private loadingController: LoadingController,
    private clientService: ClientService,
    private alertController: AlertController,
    public navParams: NavParams
  ) { }

  async dismissModal() {
    if (this.isReadonly || this.isNew) {
      this.modalController.dismiss({
        dismissed: true
      });
    } else {
      const alert = await this.alertController.create({
        header: 'Confirmação de finalização',
        message: `Deseja mesmo sair? Nenhuma alteração será salva.`,
        buttons: [{
          text: 'SIM',
          handler: () => {
            this.modalController.dismiss({
              dismissed: true
            });

          }
        }, {
          text: 'NÃO'
        }]
      });
      alert.present();
    }
    this.navParams.data.listComponent.list();
  }

  editForm() {
    this.isReadonly = false;
  }
  async saveClient(client: Client) {
    const loading = await this.loadingController.create({
      message: 'Salvando cliente...',
    });
    const alert = await this.alertController.create({
      header: 'Confirmação de finalização',
      message: `Deseja salvar as alterações no cliente ${client.name}?`,
      buttons: [{
        text: 'SIM',
        handler: () => {
          this.clientService
            .save(client)
            .subscribe(() => {
              this.isReadonly = true;
              loading.dismiss();
              this.dismissModal();
            });
        }
      }, {
        text: 'NÃO'
      }]
    });
    alert.present();
  }
  async deleteClient(client: Client) {
    const alert = await this.alertController.create({
      header: 'Confirmação de exclusão',
      message: `Deseja excluir o cliente ${client.name}?`,
      buttons: [
        {
          text: 'Sim',
          handler: () => this.delete(client)
        },
        {
          text: 'Não'
        }
      ]
    });
    alert.present();
  }
  private async delete(client: Client) {
    const loading = await this.loadingController.create({
      message: 'Excluindo cliente...',
    });
    this.clientService.delete(client).subscribe(() => {
      loading.dismiss();
      this.dismissModal();
    });
  }
  ngOnInit() { }

}
