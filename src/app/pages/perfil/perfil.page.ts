import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuario:any;
  nombreUsuario:string = "";

  constructor(
    private storage:StorageService
  ) { }

  ngOnInit() {
    this.cargarUsuario();
  }


  async cargarUsuario(){
    this.usuario = (await this.storage.obtenerUsuario());
    this.nombreUsuario = this.usuario[0].nombre;
  }
}
