import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'botoes',
    loadChildren: () => import('./pages/botoes/botoes.module').then( m => m.BotoesPageModule)
  },
  {
    path: 'alerta',
    loadChildren: () => import('./pages/alerta/alerta.module').then( m => m.AlertaPageModule)
  },
  {
    path: 'badges',
    loadChildren: () => import('./pages/badges/badges.module').then( m => m.BadgesPageModule)
  },
  {
    path: 'cartao',
    loadChildren: () => import('./pages/cartao/cartao.module').then( m => m.CartaoPageModule)
  },
  {
    path: 'pagina1',
    loadChildren: () => import('./pages/pagina1/pagina1.module').then( m => m.Pagina1PageModule)
  },
  {
    path: 'pagina2',
    loadChildren: () => import('./pages/pagina2/pagina2.module').then( m => m.Pagina2PageModule)
  },
  {
    path: 'variaveis/home',
    loadChildren: () => import('./pages/variaveis/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'variaveis/detalhes',
    loadChildren: () => import('./pages/variaveis/detalhes/detalhes.module').then( m => m.DetalhesPageModule)
  },
  {
    path: 'imc',
    loadChildren: () => import('./pages/imc/imc.module').then( m => m.ImcPageModule)
  },
  {
    path: 'resultado',
    loadChildren: () => import('./pages/resultado/resultado.module').then( m => m.ResultadoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
