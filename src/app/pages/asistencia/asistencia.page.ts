import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  clasesAsistidas:number = 17; //Ejemplo
  clasesTotal:number = 23 //Ejemplo
  clasesPorcentaje:number = 0

  constructor(
    private helper:HelperService,
    private router:Router,
    private auth:AngularFireAuth
    ) { }

  ngOnInit() {
    this.clasesPorcentaje=((this.clasesAsistidas*100)/23)/100
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
