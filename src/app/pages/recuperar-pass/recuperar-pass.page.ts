import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-recuperar-pass',
  templateUrl: './recuperar-pass.page.html',
  styleUrls: ['./recuperar-pass.page.scss'],
})
export class RecuperarPassPage implements OnInit {

  email:string="";

  constructor(private router:Router, private helperService:HelperService) { }

  ngOnInit() {
  }

  recuperarPass(){
    if (this.email==""){
      this.helperService.showAlert("Por favor ingrese un correo","Ha ocurrido un error")
    }
    else{
      this.email="email";
      this.helperService.confirmAlert("En caso de existir una cuenta asignada a ese Email se te enviará un correo para recuperar tu contraseña. ")
    }
  }

}
