import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController, AlertController, NavParams } from '@ionic/angular';
import { SuppliersService } from 'src/app/services/suppliers.service';

@Component({
  selector: 'app-suppliers-modal',
  templateUrl: './suppliers-modal.component.html',
  styleUrls: ['./suppliers-modal.component.scss'],
})
export class SuppliersModalComponent implements OnInit {
  isReadonly: boolean;
  isNew: boolean;
  listComponent: any;
  constructor(
    private modalController: ModalController,
    private loadingController: LoadingController,
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
  async saveSupplier(supplier: Supplier) {
    const loading = await this.loadingController.create({
      message: 'Salvando fornecedor...',
    });
    const alert = await this.alertController.create({
      header: 'Confirmação de finalização',
      message: `Deseja salvar as alterações no fornecedor ${supplier.brand}?`,
      buttons: [{
        text: 'SIM',
        handler: () => {
          this.suppliersService
            .save(supplier)
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
  async deleteSupplier(supplier: Supplier) {
    const alert = await this.alertController.create({
      header: 'Confirmação de exclusão',
      message: `Deseja excluir o fornecedor ${supplier.brand}?`,
      buttons: [
        {
          text: 'Sim',
          handler: () => this.delete(supplier)
        },
        {
          text: 'Não'
        }
      ]
    });
    alert.present();
  }
  private async delete(supplier: Supplier) {
    const loading = await this.loadingController.create({
      message: 'Excluindo fornecedor...',
    });
    this.suppliersService.delete(supplier).subscribe(() => {
      loading.dismiss();
      this.dismissModal();
    });
  }
  ngOnInit() { }

}
