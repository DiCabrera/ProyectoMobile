import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuario:any;
  nombreUsuario:string = "";

  constructor(
    private storage:StorageService,
    private router:Router,
    private helper:HelperService,
    private auth:AngularFireAuth
  ) { }

  ngOnInit() {
    this.cargarUsuario();
  }


  async cargarUsuario(){
    this.usuario = (await this.storage.obtenerUsuario());
    this.nombreUsuario = this.usuario[0].nombre;
  }

  async logOut(){
    var confirmar = await this.helper.showConfirm("¿Cerrar sesión?","Confirmar","Cancelar")
    if (confirmar == true) {
      await this.auth.signOut();
      await this.router.navigateByUrl("login")
    }
  }

  goHome(){
    this.router.navigateByUrl("inicio")
  }

}
