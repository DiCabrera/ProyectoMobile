import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //pgy4121002d@duoc.cl
  //123456

  email:string = "";
  pass:string = "";
  passType:string = "password";
  passShow:boolean = false;
  isLogin:boolean = true;

  constructor(private router:Router,
              private helperService:HelperService,
              private storage:StorageService,
              private auth:AngularFireAuth
  ) { }

  ngOnInit() {
  }

  async login(){
    const loader = await this.helperService.showLoader("Cargando");
    if (this.email == ""){
      await loader.dismiss();
      this.helperService.showAlert("Por favor ingrese un correo","¡Ha ocurrido un error!");
      return;
    }
    if (this.pass == ""){
      await loader.dismiss();
      this.helperService.showAlert("Por favor ingrese una contraseña","¡Ha ocurrido un error!")
      return;
    }

    try {
      await loader.dismiss();
      this.storage.usuarioCorreo = this.email;
      const req = await this.auth.signInWithEmailAndPassword(this.email,this.pass);
      console.log("TOKEN", await req.user?.getIdToken());
      await this.router.navigateByUrl("inicio");
    }
    catch (error:any) {
      console.log("asd")
      //if(error.code == 'auth/user-not-found'){
        //await loader.dismiss();
        //await this.helperService.showAlert("El correo y/o contraseña no existen en la base de datos","¡Los datos ingresados no son validos!")
      //}
    }
  }

  registro(){
    this.router.navigateByUrl("registro")
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
