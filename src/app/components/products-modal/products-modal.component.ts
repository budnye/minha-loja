import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController, AlertController, NavParams } from '@ionic/angular';
import { ProductsService } from 'src/app/services/products.service';
import { SuppliersService } from 'src/app/services/suppliers.service';

@Component({
  selector: 'app-products-modal',
  templateUrl: './products-modal.component.html',
  styleUrls: ['./products-modal.component.scss'],
})
export class ProductsModalComponent implements OnInit {
  product: Product;
  suppliers: Supplier[];
  isReadonly: boolean;
  isNew: boolean;
  listComponent: any;
  constructor(
    private modalController: ModalController,
    private loadingController: LoadingController,
    private productsService: ProductsService,
    private suppliersService: SuppliersService,
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
  async saveProduct(product: Product) {
    const loading = await this.loadingController.create({
      message: 'Salvando produto...',
    });
    const alert = await this.alertController.create({
      header: 'Confirmação de finalização',
      message: `Deseja salvar as alterações no produto ${product.name}?`,
      buttons: [{
        text: 'SIM',
        handler: () => {
          this.productsService
            .save(product)
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
  async deleteProduct(product: Product) {
    const alert = await this.alertController.create({
      header: 'Confirmação de exclusão',
      message: `Deseja excluir o produto ${product.name}?`,
      buttons: [
        {
          text: 'Sim',
          handler: () => this.delete(product)
        },
        {
          text: 'Não'
        }
      ]
    });
    alert.present();
  }
  private async delete(product: Product) {
    const loading = await this.loadingController.create({
      message: 'Excluindo produto...',
    });
    this.productsService.delete(product).subscribe(() => {
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

  compareWith(supplier1: Supplier, supplier2: Supplier) {
    return supplier1 && supplier2 ? supplier1.id === supplier2.id : supplier1 === supplier2;
  };
  ngOnInit() {
    this.listSuppliers();
  }

}

