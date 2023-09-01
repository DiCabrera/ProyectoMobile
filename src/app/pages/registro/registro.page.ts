import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  nombre:string = "";
  apellido:string = "";
  email:string = "";
  pass:string = "";

  passType:string = "password";
  passShow:boolean = false;

  constructor(private router:Router, private helperService:HelperService) { }

  ngOnInit() {
    
  }

  registrarse(){
    if(this.nombre == ""){
      this.helperService.showAlert("Por favor ingrese un nombre","¡Ha ocurrido un error!");
      return;
    }
    if(this.apellido == ""){
      this.helperService.showAlert("Por favor ingrese un apellido","¡Ha ocurrido un error!");
      return;
    }
    if(this.email == ""){
      this.helperService.showAlert("Por favor ingrese un correo","¡Ha ocurrido un error!");
      return;
    }
    if(this.pass == ""){
      this.helperService.showAlert("Por favor ingrese una contraseña","¡Ha ocurrido un error!");
      return;
    }
    else{
      this.nombre="nombre";
      this.apellido="apellido";
      this.email="email";
      this.pass="pass";
      this.helperService.confirmAlert("Registro completado. Una verificación ha sido enviada a su correo electrónico")
    }
  }

  verPass(){
    if(this.passShow){
      this.passShow = false;
      this.passType = "password";
    }
    else {
      this.passShow = true;
      this.passType = "string"
    }
  }


}
