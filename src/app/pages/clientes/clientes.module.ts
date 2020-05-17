import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesPageRoutingModule } from './clientes-routing.module';

import { ClientesPage } from './clientes.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ClientsListComponent } from 'src/app/components/clients-list/clients-list.component';
import { ClientsListItemComponent } from 'src/app/components/clients-list-item/clients-list-item.component';
import { ClientsModalComponent } from 'src/app/components/clients-modal/clients-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ClientesPage, ClientsListComponent, ClientsListItemComponent, ClientsModalComponent],

  entryComponents: [ClientsModalComponent]
})
export class ClientesPageModule { }
