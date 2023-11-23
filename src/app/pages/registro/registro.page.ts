import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Usuario } from 'src/app/models/usuario';
import { StorageService } from 'src/app/services/storage.service';

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
    private auth:AngularFireAuth,
    private storageService:StorageService,
    private helper:HelperService) { }

  ngOnInit() {
    this.userView();
  }

  async userView(){
    console.log("Storage de usuario: ",await this.storageService.obtenerUsuario());
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

        const request = await this.auth.createUserWithEmailAndPassword(this.email,this.pass)
        var user =[
          {
            email: this.email,
            nombre: this.nombre,
            apellido: this.apellido
          }
        ]
        await this.storageService.guardarUsuario(user);
      
        await this.router.navigateByUrl('login');
        await loader.dismiss();
        this.helperService.confirmAlert("Registro completado. Una verificación ha sido enviada a su correo electrónico")
        
      }
    }
  
    catch (error:any) {
      this.helper.showToast("Vuelva a intentarlo");
      if(error.code == 'auth/invalid-email'){
        await this.helperService.showAlert("El correo que se ha ingresado no es valido","Error de validación")
        await loader.dismiss();
      }

      if(error.code == 'auth/email-already-in-use'){
        await this.helperService.showAlert("El correo ingresado ya se encuentra registrado","Error de validación")
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

  goHome(){
    this.router.navigateByUrl("login")
  }

}
