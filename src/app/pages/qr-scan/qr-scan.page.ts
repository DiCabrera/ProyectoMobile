import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr-scan',
  templateUrl: './qr-scan.page.html',
  styleUrls: ['./qr-scan.page.scss'],
})
export class QrScanPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  scanQR(){
    this.router.navigateByUrl("qr-info");
  }
}
