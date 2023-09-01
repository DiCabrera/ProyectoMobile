import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperarConfirmacionPageRoutingModule } from './recuperar-confirmacion-routing.module';

import { RecuperarConfirmacionPage } from './recuperar-confirmacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarConfirmacionPageRoutingModule
  ],
  declarations: [RecuperarConfirmacionPage]
})
export class RecuperarConfirmacionPageModule {}
