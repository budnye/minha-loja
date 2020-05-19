import { Component, OnInit } from '@angular/core';
import { ProductsModalComponent } from '../products-modal/products-modal.component';
import { LoadingController, ModalController } from '@ionic/angular';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products: any[];
  product: Product;

  constructor(
    private loadingController: LoadingController,
    private productsService: ProductsService,
    private modalController: ModalController
  ) { }

  async list() {
    const loading = await this.loadingController.create({
      message: 'Carregando...',
    });
    loading.present();
    this.productsService.getProducts().subscribe((data) => {
      this.products = data;
      loading.dismiss();
    });
  }

  ngOnInit() {
    this.list();
  }

  ionViewWillEnter() {
    this.list();
  }


  async newProductModal() {
    this.product = {
      id: null,
      name: '',
      description: '',
      price: 0,
    };
    const modal = await this.modalController.create({
      component: ProductsModalComponent,
      componentProps: {
        product: this.product,
        isReadonly: false,
        isNew: true,
        listComponent: this
      }
    });
    return await modal.present();
  }
}
