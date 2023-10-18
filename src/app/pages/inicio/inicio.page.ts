import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animation } from '@ionic/angular';
import { AnimationController, IonCard, MenuController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { HelperService } from 'src/app/services/helper.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  private animation!: Animation;

  login:boolean=false;

  usuario:any;
  nombreUsuario:string = "";

  loading:boolean = true;

  constructor(private router:Router,
              private animationCtrl: AnimationController,
              private storage:StorageService,
              private auth:AngularFireAuth,
              private helper:HelperService
  ) { }

  ngOnInit() {
    this.cargarUsuario();
  }

  scanQR(){
    this.router.navigateByUrl("qr-scan")
  }

  asistencia(){
    this.router.navigateByUrl("asistencia")
  }

  async cargarUsuario(){

    console.log("USUARIO STORAGE",await this.storage.obtenerUsuario());
    console.log("PROPIEDAD SERVICE STORAGE",this.storage.usuarioCorreo);
    console.log(this.nombreUsuario)

    var user = await this.auth.currentUser;
    
    this.usuario = (await this.storage.obtenerUsuario()).filter(e => e.email == user?.email);;
    this.nombreUsuario = this.usuario[0].nombre;
  }

  async logOut(){
    var confirmar = await this.helper.showConfirm("¿Cerrar sesión?","Confirmar","Cancelar")
    if (confirmar == true) {
      this.router.navigateByUrl("login")
    }
  }

  goHome(){
    this.router.navigateByUrl("inicio")
  }

}
