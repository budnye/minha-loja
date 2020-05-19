import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SuppliersModalComponent } from '../suppliers-modal/suppliers-modal.component';

@Component({
  selector: 'supplier-list-item',
  templateUrl: './supplier-list-item.component.html',
  styleUrls: ['./supplier-list-item.component.scss'],
})
export class SupplierListItemComponent implements OnInit {
  @Input() supplier: Supplier;
  @Output() updateList = new EventEmitter();
  constructor(public modalController: ModalController,
  ) { }
  async presentModal() {
    const modal = await this.modalController.create({
      component: SuppliersModalComponent,
      componentProps: {
        supplier: this.supplier,
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
