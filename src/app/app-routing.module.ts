import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'main',
    loadChildren: () =>
      import('./pages/main/main.module').then((m) => m.MainPageModule),
  },
  {
    path: 'produtos',
    loadChildren: () =>
      import('./pages/produtos/produtos.module').then(
        (m) => m.ProdutosPageModule
      ),
  },
  {
    path: 'clientes',
    loadChildren: () =>
      import('./pages/clientes/clientes.module').then(
        (m) => m.ClientesPageModule
      ),
  },
  {
    path: 'fornecedores',
    loadChildren: () =>
      import('./pages/fornecedores/fornecedores.module').then(
        (m) => m.FornecedoresPageModule
      ),
  },
  {
    path: 'pedidos',
    loadChildren: () =>
      import('./pages/pedidos/pedidos.module').then((m) => m.PedidosPageModule),
  },
  {
    path: 'vendas',
    loadChildren: () =>
      import('./pages/vendas/vendas.module').then((m) => m.VendasPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
