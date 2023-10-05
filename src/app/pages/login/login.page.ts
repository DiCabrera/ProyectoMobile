import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';


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

  constructor(private router:Router,
              private helperService:HelperService,
              private auth:AngularFireAuth,
  ) { }

  ngOnInit() {
  }

  login(){
    if (this.email == ""){
      this.helperService.showAlert("Por favor ingrese un correo","¡Ha ocurrido un error!");
      return;
    }
    if (this.pass == ""){
      this.helperService.showAlert("Por favor ingrese una contraseña","¡Ha ocurrido un error!")
      return;
    }
    if (this.email == "pgy4121-002d" && this.pass == "pgy4121-002d"){
      this.router.navigateByUrl("inicio");
    }
    else{
      this.helperService.showAlert("Los datos ingresados son incorrectos","¡Ha ocurrido un error!")
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

}
