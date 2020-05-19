import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DeliveryModalComponent } from '../delivery-modal/delivery-modal.component';

@Component({
  selector: 'delivery-list-item',
  templateUrl: './delivery-list-item.component.html',
  styleUrls: ['./delivery-list-item.component.scss'],
})
export class DeliveryListItemComponent implements OnInit {
  @Input() delivery: Delivery;
  @Output() updateList = new EventEmitter();

  constructor(public modalController: ModalController,
  ) { }
  async presentModal() {
    const modal = await this.modalController.create({
      component: DeliveryModalComponent,
      componentProps: {
        delivery: this.delivery,
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
