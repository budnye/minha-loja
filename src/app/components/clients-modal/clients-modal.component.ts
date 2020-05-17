import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-clients-modal',
  templateUrl: './clients-modal.component.html',
  styleUrls: ['./clients-modal.component.scss'],
})
export class ClientsModalComponent implements OnInit {

  constructor(private modalController: ModalController) { }
  dismissModal() {
    this.modalController.dismiss({
      dismissed: true
    });
  }
  ngOnInit() { }

}
