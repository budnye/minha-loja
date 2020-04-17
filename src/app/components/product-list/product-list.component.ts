import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() products: any[];
  constructor() { }

  ngOnInit() { }
  getTotal(products: any[]) {
    let total: number = 0;
    products.map((product) => {
      total = total + product.price;
    });
    return total;
  }

}
