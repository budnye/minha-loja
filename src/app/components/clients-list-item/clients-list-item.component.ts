import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'clients-list-item',
  templateUrl: './clients-list-item.component.html',
  styleUrls: ['./clients-list-item.component.scss'],
})
export class ClientsListItemComponent implements OnInit {
  @Input() client: Client;
  constructor() { }

  ngOnInit() { }

}
