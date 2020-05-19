import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { DeliveryService } from 'src/app/services/delivery.service';
import { DeliveryModalComponent } from '../delivery-modal/delivery-modal.component';

@Component({
  selector: 'delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.scss'],
})
export class DeliveryListComponent implements OnInit {
  deliveries: Delivery[];
  delivery: Delivery;

  constructor(
    private loadingController: LoadingController,
    private deliveryService: DeliveryService,
    private modalController: ModalController
  ) { }

  async list() {
    const loading = await this.loadingController.create({
      message: 'Carregando...',
    });
    loading.present();
    this.deliveryService.getDeliveries().subscribe((data) => {
      this.deliveries = data;
      loading.dismiss();
    });
  }

  ngOnInit() {
    this.list();
  }

  ionViewWillEnter() {
    this.list();
  }


  async newDeliveryModal() {
    this.delivery = {
      id: null,
      title: '',
      products: [],
      client: 0,
      isDone: false,
    };

    const modal = await this.modalController.create({
      component: DeliveryModalComponent,
      componentProps: {
        delivery: this.delivery,
        isReadonly: false,
        isNew: true,
        listComponent: this
      }
    });
    return await modal.present();
  }
}
