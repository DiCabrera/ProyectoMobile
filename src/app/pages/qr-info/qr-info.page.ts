import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-qr-info',
  templateUrl: './qr-info.page.html',
  styleUrls: ['./qr-info.page.scss'],
})
export class QrInfoPage implements OnInit {
  dateTime: string | undefined;

  constructor(private router:Router, private helperService:HelperService) { }

  ngOnInit() {
    setTimeout(() => {
      this.dateTime = new Date().toLocaleDateString();
    });
  }

  qrCancel(){
    this.helperService.showAlert("Has sido devuelto al menú para escanear","Escaneo cancelado")
    this.router.navigateByUrl("qr-scan")
  }

  qrConfirm(){
    this.helperService.confirm("Asistencia registrada con exito el día: " + this.dateTime)
    this.router.navigateByUrl("inicio")
  }

}
