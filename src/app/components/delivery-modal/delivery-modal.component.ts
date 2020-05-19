import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController, AlertController, NavParams } from '@ionic/angular';
import { ClientService } from 'src/app/services/client.service';
import { ProductsService } from 'src/app/services/products.service';
import { DeliveryService } from 'src/app/services/delivery.service';

@Component({
  selector: 'app-delivery-modal',
  templateUrl: './delivery-modal.component.html',
  styleUrls: ['./delivery-modal.component.scss'],
})
export class DeliveryModalComponent implements OnInit {
  delivery: Delivery;
  clients: Client[];
  products: Product[];
  isReadonly: boolean;
  isNew: boolean;
  listComponent: any;
  constructor(
    private modalController: ModalController,
    private loadingController: LoadingController,
    private deliveryService: DeliveryService,
    private clientService: ClientService,
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
  async saveDelivery(delivery: Delivery) {
    const loading = await this.loadingController.create({
      message: 'Salvando produto...',
    });
    const alert = await this.alertController.create({
      header: 'Confirmação de finalização',
      message: `Deseja salvar as alterações na venda ${delivery.title}?`,
      buttons: [{
        text: 'SIM',
        handler: () => {
          this.deliveryService
            .save(delivery)
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
  async deleteDelivery(delivery: Delivery) {
    const alert = await this.alertController.create({
      header: 'Confirmação de exclusão',
      message: `Deseja excluir da venda ${delivery.title}?`,
      buttons: [
        {
          text: 'Sim',
          handler: () => this.delete(delivery)
        },
        {
          text: 'Não'
        }
      ]
    });
    alert.present();
  }
  private async delete(delivery: Delivery) {
    const loading = await this.loadingController.create({
      message: 'Excluindo venda...',
    });
    this.deliveryService.delete(delivery).subscribe(() => {
      loading.dismiss();
      this.dismissModal();
    });
  }

  async listClients() {
    const loading = await this.loadingController.create({
      message: 'Carregando clientes...',
    });
    this.clientService.getClients().subscribe((clients) => {
      this.clients = clients;
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
    let total: number = 0;
    products[0].map((product) => {
      total = total + product.price;
    });
    return (Math.round(total * 100) / 100).toFixed(2);
  }

  compareWith(supplier1: Supplier, supplier2: Supplier) {
    return supplier1 && supplier2 ? supplier1.id === supplier2.id : supplier1 === supplier2;
  };
  ngOnInit() {
    this.listClients();
    this.listProducts();
  }
}
