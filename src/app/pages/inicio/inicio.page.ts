import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Animation } from '@ionic/angular';
import { AnimationController, IonCard, MenuController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { HelperService } from 'src/app/services/helper.service';
import { Geolocation } from '@capacitor/geolocation';


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

  @ViewChild(IonCard, { read: ElementRef })
  card!: ElementRef<HTMLIonCardElement>;

  constructor(private router:Router,
              private animationCtrl: AnimationController,
              private storage:StorageService,
              private auth:AngularFireAuth,
              private helper:HelperService,
              private menuCtrl:MenuController
  ) { }

  ngOnInit() {
    this.cargarUsuario();
    this.ubicacion();
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
      await this.auth.signOut();
      await this.router.navigateByUrl("login")
    }
  }

  goHome(){
    this.router.navigateByUrl("inicio")
  }

  cerrar(){
    this.menuCtrl.close();
  }

  abrir(){
    this.menuCtrl.toggle();
  }

  goPerfil(){
    this.router.navigateByUrl("perfil")
  }

  ubicacion(){
    const coordenada = Geolocation.getCurrentPosition();
    console.log("ubicacion: ", coordenada)
  }

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(document.querySelectorAll("#tav"))
      .duration(100)
      .iterations(1)
      .fromTo('transform', 'translateX(0)', 'translateX(10px)')
      .fromTo('transform', 'translateX(10px)', 'translateX(-10px)')
      .fromTo('transform', 'translateX(-10px)', 'translateX(10px)')
      .fromTo('transform', 'translateX(10px)', 'translateX(-10px)')
      .fromTo('transform', 'translateX(-10px)', 'translateX(0)')
  }

  goTav(){
    this.animation.play();
    this.helper.showToast("Los cursos TAV no se encuentran disponibles aún.",1000)
  }
}
