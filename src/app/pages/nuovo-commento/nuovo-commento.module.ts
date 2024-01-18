import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuovoCommentoPageRoutingModule } from './nuovo-commento-routing.module';

import { NuovoCommentoPage } from './nuovo-commento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuovoCommentoPageRoutingModule
  ],
  declarations: [NuovoCommentoPage]
})
export class NuovoCommentoPageModule {}
