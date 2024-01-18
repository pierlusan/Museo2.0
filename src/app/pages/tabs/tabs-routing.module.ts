import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path : 'opere',
        loadChildren: () => import('../opere/opere.module').then( m => m.OperePageModule)
      },
      {
        path : 'opere/:id',
        loadChildren: () => import('../opera-details/opera-details.module').then( m => m.OperaDetailsPageModule)
      },
      {
        path : 'autore/:id',
        loadChildren: () => import('../autore-details/autore-details.module').then( m => m.AutoreDetailsPageModule)
      },
      {
        path : 'guest-book',
        loadChildren: () => import('../guest-book/guest-book.module').then( m => m.GuestBookPageModule)
      },
      {
        path : 'ricerca',
        loadChildren: () => import('../ricerca/ricerca.module').then( m => m.RicercaPageModule)
      },
      {
        path : 'nuovo-commento',
        loadChildren: () => import('../nuovo-commento/nuovo-commento.module').then( m => m.NuovoCommentoPageModule)
      }
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
