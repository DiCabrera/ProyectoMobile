import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { BarcodeScanner } from 'capacitor-barcode-scanner';
import { QrInfoPage } from '../qr-info/qr-info.page';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-qr-scan',
  templateUrl: './qr-scan.page.html',
  styleUrls: ['./qr-scan.page.scss'],
})



export class QrScanPage implements OnInit {

  resultQr: any = "";
  asignatura: string = '';

  constructor(
    private router: Router,
    private helper: HelperService,
    private auth:AngularFireAuth) { }

  ngOnInit() {
  }

  async logOut() {
    var confirmar = await this.helper.showConfirm("¿Cerrar sesión?", "Confirmar", "Cancelar")
    if (confirmar == true) {
      await this.auth.signOut();
      await this.router.navigateByUrl("login")
    }
  }

  goHome() {
    this.router.navigateByUrl("inicio")
  }

  async scan() {
    this.resultQr = (await BarcodeScanner.scan()).code;
    console.log("obj QR", JSON.parse(this.resultQr));
    
    await this.modalResultQr();
  }

  async modalResultQr() {
    
    var qr = [];
    qr.push(this.resultQr);
    const parametros={dataQr: this.resultQr}
    await this.helper.showModal(QrInfoPage,parametros,false);

  }
}
