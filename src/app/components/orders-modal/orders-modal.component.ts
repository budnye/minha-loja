import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController, AlertController, NavParams } from '@ionic/angular';
import { OrderService } from 'src/app/services/order.service';
import { ProductsService } from 'src/app/services/products.service';
import { SuppliersService } from 'src/app/services/suppliers.service';

@Component({
  selector: 'app-orders-modal',
  templateUrl: './orders-modal.component.html',
  styleUrls: ['./orders-modal.component.scss'],
})
export class OrdersModalComponent implements OnInit {
  suppliers: Supplier[];
  products: Product[];
  isReadonly: boolean;
  isNew: boolean;
  listComponent: any;
  constructor(
    private modalController: ModalController,
    private loadingController: LoadingController,
    private orderService: OrderService,
    private suppliersService: SuppliersService,
    private productsService: ProductsService,
    private alertController: AlertController,
    public navParams: NavParams
  ) { }

  async dismissModal() {
    if (this.isReadonly || this.isNew) {
      this.modalController.dismiss({
        dismissed: true
      });
    } else {
      const alert = await this.alertController.create({
        header: 'Confirmação de finalização',
        message: `Deseja mesmo sair? Nenhuma alteração será salva.`,
        buttons: [{
          text: 'SIM',
          handler: () => {
            this.modalController.dismiss({
              dismissed: true
            });

          }
        }, {
          text: 'NÃO'
        }]
      });
      alert.present();
    }
    this.navParams.data.listComponent.list();
  }

  editForm() {
    this.isReadonly = false;
  }
  async saveOrder(order: Order) {
    const loading = await this.loadingController.create({
      message: 'Salvando produto...',
    });
    const alert = await this.alertController.create({
      header: 'Confirmação de finalização',
      message: `Deseja salvar as alterações no pedido ${order.title}?`,
      buttons: [{
        text: 'SIM',
        handler: () => {
          this.orderService
            .save(order)
            .subscribe(() => {
              this.isReadonly = true;
              loading.dismiss();
              this.dismissModal();
            });
        }
      }, {
        text: 'NÃO'
      }]
    });
    alert.present();
  }
  async deleteOrder(order: Order) {
    const alert = await this.alertController.create({
      header: 'Confirmação de exclusão',
      message: `Deseja excluir da venda ?`,
      buttons: [
        {
          text: 'Sim',
          handler: () => this.delete(order)
        },
        {
          text: 'Não'
        }
      ]
    });
    alert.present();
  }
  private async delete(order: Order) {
    const loading = await this.loadingController.create({
      message: 'Excluindo pedido...',
    });
    this.orderService.delete(order).subscribe(() => {
      loading.dismiss();
      this.dismissModal();
    });
  }

  async listSuppliers() {
    const loading = await this.loadingController.create({
      message: 'Carregando fornecedores...',
    });
    this.suppliersService.getSuppliers().subscribe((suppliers) => {
      this.suppliers = suppliers;
      loading.dismiss();
    });
  }
  async listProducts() {
    const loading = await this.loadingController.create({
      message: 'Carregando produtos...',
    });
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
      loading.dismiss();
    });
  }
  getTotal(products: any[]) {
    if (!products[0]) {
      return 0;
    }
    let total: number = 0;
    products[0].map((product) => {
      total = total + product.price;
    });
    return (Math.round(total * 100) / 100).toFixed(2);
  }

  compareSupplier(supplier1: Supplier, supplier2: Supplier) {
    return supplier1 && supplier2 ? supplier1.id === supplier2.id : supplier1 === supplier2;
  };

  compareProduct(product1: Product, product2: Product) {
    return product1 && product2 ? product1.id === product2.id : product1 === product2;
  };

  ngOnInit() {
    this.listSuppliers();
    this.listProducts();
  }
}
