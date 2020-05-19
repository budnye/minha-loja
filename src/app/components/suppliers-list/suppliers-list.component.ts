import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { SuppliersService } from 'src/app/services/suppliers.service';
import { SuppliersModalComponent } from '../suppliers-modal/suppliers-modal.component';

@Component({
  selector: 'suppliers-list',
  templateUrl: './suppliers-list.component.html',
  styleUrls: ['./suppliers-list.component.scss'],
})
export class SuppliersListComponent implements OnInit {
  suppliers: any[];
  supplier: Supplier;
  constructor(
    private loadingController: LoadingController,
    private supplierService: SuppliersService,
    private modalController: ModalController) { }
  async list() {
    const loading = await this.loadingController.create({
      message: 'Carregando...',
    });
    loading.present();
    this.supplierService.getSuppliers().subscribe((data) => {
      this.suppliers = data;
      loading.dismiss();
    });
  }

  ngOnInit() {
    this.list();
  }

  ionViewWillEnter() {
    this.list();
  }


  async newSupplierModal() {
    this.supplier = {
      id: null,
      brand: '',
      sellerName: '',
      cnpj: '',
    };
    const modal = await this.modalController.create({
      component: SuppliersModalComponent,
      componentProps: {
        supplier: this.supplier,
        isReadonly: false,
        isNew: true,
        listComponent: this
      }
    });
    return await modal.present();
  }

}
