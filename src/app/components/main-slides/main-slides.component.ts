import { Component, OnInit } from '@angular/core';
import { DeliveryService } from 'src/app/services/delivery.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'main-slides',
  templateUrl: './main-slides.component.html',
  styleUrls: ['./main-slides.component.scss'],
})
export class MainSlidesComponent implements OnInit {
  deliveries: any[];
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1.3,
    pager: true
  };

  constructor(
    private deliveryService: DeliveryService,
    private loadingController: LoadingController
  ) { }


  async listar() {
    const loading = await this.loadingController.create({
      message: 'Carregando...',
    });
    loading.present();
    this.deliveryService.getDeliveries().subscribe((data) => {
      this.deliveries = data;
      loading.dismiss();
    });
  }
  ionViewWillEnter() {
  }
  ngOnInit() {
    this.listar();
  }

}
