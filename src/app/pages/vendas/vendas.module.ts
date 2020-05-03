import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendasPageRoutingModule } from './vendas-routing.module';

import { VendasPage } from './vendas.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [VendasPage]
})
export class VendasPageModule { }
