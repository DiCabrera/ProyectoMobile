import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

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

  constructor(
    private router:Router,
    private helperService:HelperService,
    private auth:AngularFireAuth) { }

  ngOnInit() {
    
  }

  async registrarse(){
    const loader = await this.helperService.showLoader("Cargando");
    try {
      if(this.nombre == ""){
        await loader.dismiss();
        this.helperService.showAlert("Por favor ingrese un nombre","¡Ha ocurrido un error!");
        return;
      }
      if(this.apellido == ""){
        await loader.dismiss();
        this.helperService.showAlert("Por favor ingrese un apellido","¡Ha ocurrido un error!");
        return;
      }
      if(this.email == ""){
        await loader.dismiss();
        this.helperService.showAlert("Por favor ingrese un correo","¡Ha ocurrido un error!");
        return;
      }
      if(this.pass == ""){
        await loader.dismiss();
        this.helperService.showAlert("Por favor ingrese una contraseña","¡Ha ocurrido un error!");
        return;
      }
      else{
        this.nombre="nombre";
        this.apellido="apellido";
        this.email="email";
        this.pass="pass";

        const request = await this.auth.createUserWithEmailAndPassword(this.email,this.pass)
        await this.router.navigateByUrl('login');
        await loader.dismiss();
        this.helperService.confirmAlert("Registro completado. Una verificación ha sido enviada a su correo electrónico")
      }
    }
  
    catch (error:any) {
      if(error.code == 'auth/invalid-email'){
        await this.helperService.showAlert("El correo que se ha ingresado no es valido","Error de validación")
        await loader.dismiss();
      }
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
