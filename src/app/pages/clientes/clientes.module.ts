import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesPageRoutingModule } from './clientes-routing.module';

import { ClientesPage } from './clientes.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ClientsListItemComponent } from 'src/app/components/clients-list-item/clients-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ClientesPage, ClientsListItemComponent]
})
export class ClientesPageModule { }
