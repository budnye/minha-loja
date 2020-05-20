import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidosPageRoutingModule } from './pedidos-routing.module';

import { PedidosPage } from './pedidos.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { OrdersListComponent } from 'src/app/components/orders-list/orders-list.component';
import { OrdersListItemComponent } from 'src/app/components/orders-list-item/orders-list-item.component';
import { OrdersModalComponent } from 'src/app/components/orders-modal/orders-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PedidosPage, OrdersListComponent, OrdersListItemComponent, OrdersModalComponent],
  entryComponents: [
    OrdersModalComponent
  ]
})
export class PedidosPageModule { }
