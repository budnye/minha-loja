import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {
  cardsRight = [
    {
      title: 'Vendas',
      icon: 'cart',
      color: 'primary',
      link: '/vendas'
    },
    {
      title: 'Produtos',
      icon: 'gift',
      color: 'tertiary',
      link: '/produtos'
    },
    {
      title: 'Sair',
      icon: 'exit',
      color: 'danger',
      link: '/home'
    }
  ];
  cardsLeft = [
    {
      title: 'Clientes',
      icon: 'people',
      color: 'success',
      link: '/clientes'
    },
    {
      title: 'Fornecedores',
      icon: 'cube',
      color: 'warning',
      link: '/fornecedores'
    },
    {
      title: 'Pedidos',
      icon: 'file-tray-full',
      color: 'dark',
      link: '/pedidos'
    }
  ];
  constructor() { }

  ngOnInit() { }

}
