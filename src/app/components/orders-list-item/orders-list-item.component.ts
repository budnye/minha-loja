import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OrdersModalComponent } from '../orders-modal/orders-modal.component';

@Component({
  selector: 'orders-list-item',
  templateUrl: './orders-list-item.component.html',
  styleUrls: ['./orders-list-item.component.scss'],
})
export class OrdersListItemComponent implements OnInit {
  @Input() order: Order;
  @Output() updateList = new EventEmitter();

  constructor(public modalController: ModalController,
  ) { }
  async presentModal() {
    const modal = await this.modalController.create({
      component: OrdersModalComponent,
      componentProps: {
        order: this.order,
        isReadonly: true,
        isNew: false,
        listComponent: this
      }
    });
    return await modal.present();
  }
  list() {
    this.updateList.emit();
  }

  ngOnInit() { }
}
