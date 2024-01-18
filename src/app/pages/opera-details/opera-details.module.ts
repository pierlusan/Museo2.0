import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperaDetailsPageRoutingModule } from './opera-details-routing.module';

import { OperaDetailsPage } from './opera-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OperaDetailsPageRoutingModule
  ],
  declarations: [OperaDetailsPage]
})
export class OperaDetailsPageModule {}
