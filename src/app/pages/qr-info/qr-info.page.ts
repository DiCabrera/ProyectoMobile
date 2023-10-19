import { Component, OnInit, Input, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { HelperService } from 'src/app/services/helper.service';
import { QrScanPage } from '../qr-scan/qr-scan.page';



@Component({
  selector: 'app-qr-info',
  templateUrl: './qr-info.page.html',
  styleUrls: ['./qr-info.page.scss'],
})
export class QrInfoPage implements OnInit {
  dateTime: string | undefined;

  constructor(
    private router:Router,
    private helper:HelperService,
    private modalController:ModalController,
    private QrScanPage:QrScanPage) { }

  ngOnInit() {
    setTimeout(() => {
      this.dateTime = new Date().toLocaleDateString();
    });
  }

  qrCancel(){
    this.helper.showAlert("Has sido devuelto al menú para escanear","Escaneo cancelado")
    this.router.navigateByUrl("qr-scan")
  }

  qrConfirm(){
    this.helper.confirm("Asistencia registrada con exito el día: " + this.dateTime)
    this.router.navigateByUrl("inicio")
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

  cerrar(){
    this.modalController.dismiss();
  }

}
