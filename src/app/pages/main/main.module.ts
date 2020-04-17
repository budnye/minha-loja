import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import { MainCardsComponent } from './../../components/main-cards/main-cards.component';
import { MainSlidesComponent } from './../../components/main-slides/main-slides.component';
import { MainModalComponent } from 'src/app/components/main-modal/main-modal.component';
import { ProductListComponent } from 'src/app/components/product-list/product-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule
  ],
  declarations: [
    MainPage,
    MainCardsComponent,
    MainSlidesComponent,
    MainModalComponent,
    ProductListComponent
  ],
  entryComponents: [
    MainModalComponent
  ]
})
export class MainPageModule { }
