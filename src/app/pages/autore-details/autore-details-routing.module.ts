import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutoreDetailsPage } from './autore-details.page';

const routes: Routes = [
  {
    path: '',
    component: AutoreDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutoreDetailsPageRoutingModule {}
