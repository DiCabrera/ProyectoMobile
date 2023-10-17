import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard'

const redirectToLogin = () => redirectUnauthorizedTo(['/login']);

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'recuperar-pass',
    loadChildren: () => import('./pages/recuperar-pass/recuperar-pass.module').then( m => m.RecuperarPassPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'qr-scan',
    loadChildren: () => import('./pages/qr-scan/qr-scan.module').then( m => m.QrScanPageModule)
  },
  {
    path: 'qr-info',
    loadChildren: () => import('./pages/qr-info/qr-info.module').then( m => m.QrInfoPageModule)
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./pages/asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },
  {
    path: 'inicio',
    canActivate:[AngularFireAuthGuard],
    data:{authGuardPipe : redirectToLogin},
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'recuperar-confirmacion',
    loadChildren: () => import('./pages/recuperar-confirmacion/recuperar-confirmacion.module').then( m => m.RecuperarConfirmacionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
