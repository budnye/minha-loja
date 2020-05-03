import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FornecedoresPageRoutingModule } from './fornecedores-routing.module';

import { FornecedoresPage } from './fornecedores.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FornecedoresPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FornecedoresPage]
})
export class FornecedoresPageModule { }
