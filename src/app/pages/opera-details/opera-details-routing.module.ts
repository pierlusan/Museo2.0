import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperaDetailsPage } from './opera-details.page';

const routes: Routes = [
  {
    path: '',
    component: OperaDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperaDetailsPageRoutingModule {}
