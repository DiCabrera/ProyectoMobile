import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperarConfirmacionPage } from './recuperar-confirmacion.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperarConfirmacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperarConfirmacionPageRoutingModule {}
