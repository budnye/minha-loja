import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MainModalComponent } from './../main-modal/main-modal.component';
import { ModalController, AlertController } from '@ionic/angular';
import { DeliveryService } from './../../services/delivery.service';
@Component({
  selector: 'main-cards',
  templateUrl: './main-cards.component.html',
  styleUrls: ['./main-cards.component.scss'],
})
export class MainCardsComponent implements OnInit {
  @Input() delivery: any;
  @Output() updatedCards = new EventEmitter();
  constructor(
    public modalController: ModalController,
    public alertController: AlertController,
    public deliveryService: DeliveryService,
  ) { }

  getProducts(products) {
    if (products.length == 1) {
      return products[0].name;
    } else {
      return `${products[0].name} ...`;
    }
  }

  updateCards() {
    this.updatedCards.emit();
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: MainModalComponent,
      componentProps: {
        delivery: this.delivery,
        slides: this,
      }
    });
    return await modal.present();
  }
  getTotal(products: any[]) {
    let total: number = 0;
    products.map((product) => {
      total = total + product.price;
    });
    return total;
  }

  async confirmDelete(delivery: Delivery) {
    let alert = await this.alertController.create({
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
    alert.present();
  }

  delete(delivery: Delivery) {
    this.deliveryService.delete(delivery).subscribe(() => this.updateCards());
  }

  listar() {

  }

  ngOnInit() {

  }
}
