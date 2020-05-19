import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductsModalComponent } from '../products-modal/products-modal.component';

@Component({
  selector: 'products-list-item',
  templateUrl: './products-list-item.component.html',
  styleUrls: ['./products-list-item.component.scss'],
})
export class ProductsListItemComponent implements OnInit {
  @Input() product: Product;
  @Output() updateList = new EventEmitter();
  constructor(public modalController: ModalController,
  ) { }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ProductsModalComponent,
      componentProps: {
        product: this.product,
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
