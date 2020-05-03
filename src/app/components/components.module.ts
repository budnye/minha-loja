import { NgModule } from '@angular/core';
import { HomeButtonComponent } from './home-button/home-button.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [IonicModule, RouterModule],
  declarations: [HomeButtonComponent],
  exports: [HomeButtonComponent]
})

export class ComponentsModule { }