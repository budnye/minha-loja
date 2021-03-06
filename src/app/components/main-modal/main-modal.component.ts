import { Component, Input } from '@angular/core';
import { ModalController, AlertController, NavParams } from '@ionic/angular';
import { DeliveryService } from 'src/app/services/delivery.service';


@Component({
  selector: 'app-main-modal',
  templateUrl: './main-modal.component.html',
  styleUrls: ['./main-modal.component.scss'],
})
export class MainModalComponent {
  @Input() delivery: any;
  @Input() slides: any;
  constructor(
    public modalController: ModalController,
    public alertController: AlertController,
    public deliveryService: DeliveryService,
    public navParams: NavParams
  ) {

  }
  dismissModal() {
    this.modalController.dismiss({
      dismissed: true
    });
    this.navParams.data.slides.updateCards();
  }

  async confirmDelete(delivery: Delivery) {
    const alerta = await this.alertController.create({
      header: 'Confirmação de finalização',
      message: `Deseja finalizar a entrega de id ${delivery.id}?`,
      buttons: [{
        text: 'SIM',
        handler: () => {
          this.delete(delivery);
        }
      }, {
        text: 'NÃO'
      }]
    });
    alerta.present();
  }

  delete(delivery: Delivery) {
    this.deliveryService.delete(delivery).subscribe(() => this.dismissModal());
  }



}


