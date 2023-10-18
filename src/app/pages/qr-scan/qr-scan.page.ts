import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-qr-scan',
  templateUrl: './qr-scan.page.html',
  styleUrls: ['./qr-scan.page.scss'],
})
export class QrScanPage implements OnInit {

  resultQr: any = "";

  constructor(
    private router:Router,
    private helper:HelperService) { }

  ngOnInit() {
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

  async scan(){
    this.resultQr  = (await BarcodeScanner.startScan());
    console.log("obj QR",this.resultQr);
    await this.modalResultQr();
  }

  async modalResultQr(){
    var qr = [];
    qr.push(this.resultQr);
    const parametros={dataQr: this.resultQr}
    //await this.helper.showModal(ResulQrPage,parametros,false);
  }
}
