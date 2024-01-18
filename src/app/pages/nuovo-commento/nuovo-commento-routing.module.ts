import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuovoCommentoPage } from './nuovo-commento.page';

const routes: Routes = [
  {
    path: '',
    component: NuovoCommentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuovoCommentoPageRoutingModule {}
