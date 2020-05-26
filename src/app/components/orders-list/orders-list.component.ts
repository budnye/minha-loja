import { Component, OnInit } from '@angular/core';
import { OrdersModalComponent } from '../orders-modal/orders-modal.component';
import { LoadingController, ModalController } from '@ionic/angular';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
})
export class OrdersListComponent implements OnInit {
  orders: Order[];
  order: Order;

  constructor(
    private loadingController: LoadingController,
    private orderService: OrderService,
    private modalController: ModalController
  ) { }

  async list() {
    const loading = await this.loadingController.create({
      message: 'Carregando...',
    });
    loading.present();
    this.orderService.getOrders().subscribe((data) => {
      this.orders = data;
      loading.dismiss();
    });
  }

  ngOnInit() {
    this.list();
  }

  ionViewWillEnter() {
    this.list();
  }


  async newOrderModal() {
    this.order = {
      id: null,
      title: '',
      supplier: '',
      products: [],
    };

    const modal = await this.modalController.create({
      component: OrdersModalComponent,
      componentProps: {
        order: this.order,
        isReadonly: false,
        isNew: true,
        listComponent: this
      }
    });
    return await modal.present();
  }
}
