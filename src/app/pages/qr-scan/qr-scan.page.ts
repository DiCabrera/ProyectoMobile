import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { QrInfoPage } from '../qr-info/qr-info.page';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-qr-scan',
  templateUrl: './qr-scan.page.html',
  styleUrls: ['./qr-scan.page.scss'],
})



export class QrScanPage implements OnInit {

  resultQr: any = "";

  constructor(
    private router: Router,
    private helper: HelperService) { }

  ngOnInit() {
  }

  async logOut() {
    var confirmar = await this.helper.showConfirm("¿Cerrar sesión?", "Confirmar", "Cancelar")
    if (confirmar == true) {
      this.router.navigateByUrl("login")
    }
  }

  goHome() {
    this.router.navigateByUrl("inicio")
  }

  async scan() {
    this.resultQr = (await BarcodeScanner.startScan());
    console.log("obj QR", this.resultQr);
    await this.modalResultQr();
  }

  async modalResultQr() {
    const parametros = { dataQr: this.resultQr }
    await this.helper.showModal(QrInfoPage, parametros, false);
    console.log(this.resultQr.content.seccion)

    const qrData = JSON.parse(this.resultQr.content);

    const asignatura = qrData.asignatura;
    const seccion = qrData.seccion;
    const docente = qrData.docente;
    const hora = qrData.hora;
    const leccion = qrData.leccion

    console.log(` Asignatura: ${asignatura} || Seccion: ${seccion} || Docente: ${docente} || Hora: ${hora} || Lección: ${leccion}`);
    console.log('QR Data:', this.resultQr);
  }
}
