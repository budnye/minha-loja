import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutosPageRoutingModule } from './produtos-routing.module';

import { ProdutosPage } from './produtos.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ProductsListComponent } from 'src/app/components/products-list/products-list.component';
import { ProductsListItemComponent } from 'src/app/components/products-list-item/products-list-item.component';
import { ProductsModalComponent } from 'src/app/components/products-modal/products-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ProdutosPage, ProductsListComponent, ProductsListItemComponent, ProductsModalComponent, ProductsModalComponent],
  entryComponents: [ProductsModalComponent]
})
export class ProdutosPageModule { }
