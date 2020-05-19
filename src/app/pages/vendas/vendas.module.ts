import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendasPageRoutingModule } from './vendas-routing.module';

import { VendasPage } from './vendas.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { DeliveryListComponent } from 'src/app/components/delivery-list/delivery-list.component';
import { DeliveryListItemComponent } from 'src/app/components/delivery-list-item/delivery-list-item.component';
import { DeliveryModalComponent } from 'src/app/components/delivery-modal/delivery-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [VendasPage, DeliveryListComponent, DeliveryListItemComponent, DeliveryModalComponent],
  entryComponents: [DeliveryModalComponent]
})
export class VendasPageModule { }
