import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'menu-cards',
  templateUrl: './menu-cards.component.html',
  styleUrls: ['./menu-cards.component.scss'],
})
export class MenuCardsComponent implements OnInit {
  @Input() card: any;
  constructor() { }

  ngOnInit() { }

}
