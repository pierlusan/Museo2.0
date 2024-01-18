import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutoreDetailsPageRoutingModule } from './autore-details-routing.module';

import { AutoreDetailsPage } from './autore-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoreDetailsPageRoutingModule
  ],
  declarations: [AutoreDetailsPage]
})
export class AutoreDetailsPageModule {}
