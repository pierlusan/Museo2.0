import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'tabs/opere',
    pathMatch: 'full'
  },
  {
    path: 'opere',
    redirectTo: 'tabs/opere'
    //loadChildren: () => import('./pages/opere/opere.module').then( m => m.OperePageModule)
  },
  {
    path: 'opere/:id',
    redirectTo: 'tabs/opere/:id'
    //loadChildren: () => import('./pages/opera-details/opera-details.module').then( m => m.OperaDetailsPageModule)
  },
  {
    path: 'autore/:id',
    redirectTo: 'tabs/autore/:id'
    //loadChildren: () => import('./pages/autore-details/autore-details.module').then( m => m.AutoreDetailsPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'guest-book',
    redirectTo: 'tabs/guest-book'
    //loadChildren: () => import('./pages/guest-book/guest-book.module').then( m => m.GuestBookPageModule)
  },
  {
    path: 'ricerca',
    redirectTo: 'tabs/ricerca'
    //loadChildren: () => import('./pages/ricerca/ricerca.module').then( m => m.RicercaPageModule)
  },
  {
    path: 'nuovo-commento',
    redirectTo: 'tabs/nuovo-commento'
    //loadChildren: () => import('./pages/nuovo-commento/nuovo-commento.module').then( m => m.NuovoCommentoPageModule)
  }
  /*
  {
    path: 'qr-code',
    redirectTo: 'tabs/qr-code'
    //loadChildren: () => import('./pages/qr-code/qr-code.module').then( m => m.QrCodePageModule)
  }*/
   
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
