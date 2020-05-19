import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FornecedoresPageRoutingModule } from './fornecedores-routing.module';

import { FornecedoresPage } from './fornecedores.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { SuppliersListComponent } from 'src/app/components/suppliers-list/suppliers-list.component';
import { SuppliersModalComponent } from 'src/app/components/suppliers-modal/suppliers-modal.component';
import { SupplierListItemComponent } from 'src/app/components/supplier-list-item/supplier-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FornecedoresPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FornecedoresPage, SuppliersListComponent, SuppliersModalComponent, SupplierListItemComponent],
  entryComponents: [SuppliersModalComponent]
})
export class FornecedoresPageModule { }
