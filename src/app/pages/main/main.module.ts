import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import { MainCardsComponent } from './../../components/main-cards/main-cards.component';
import { MainSlidesComponent } from './../../components/main-slides/main-slides.component';
import { MainModalComponent } from './../../components/main-modal/main-modal.component';
import { ProductListComponent } from './../../components/product-list/product-list.component';
import { MainMenuComponent } from './../../components/main-menu/main-menu.component';
import { MenuCardsComponent } from './../../components/menu-cards/menu-cards.component';

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
    ProductListComponent,
    MainMenuComponent,
    MenuCardsComponent
  ],
  entryComponents: [
    MainModalComponent
  ]
})
export class MainPageModule { }
