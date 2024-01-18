import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperePage } from './opere.page';

const routes: Routes = [
  {
    path: '',
    component: OperePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperePageRoutingModule {}
