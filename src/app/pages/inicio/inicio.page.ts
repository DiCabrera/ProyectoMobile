import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animation } from '@ionic/angular';
import { AnimationController, IonCard, MenuController } from '@ionic/angular';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  private animation!: Animation;

  loading:boolean = true;

  constructor(private router:Router,
              private animationCtrl: AnimationController
  ) { }

  ngOnInit() {
    
  }

  scanQR(){
    this.router.navigateByUrl("qr-scan")
  }

  asistencia(){
    this.router.navigateByUrl("asistencia")
  }
}
