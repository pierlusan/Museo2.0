import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperePageRoutingModule } from './opere-routing.module';

import { OperePage } from './opere.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OperePageRoutingModule
  ],
  declarations: [OperePage]
})
export class OperePageModule {}
