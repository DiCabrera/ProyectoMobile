import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string = "";
  pass:string = "";
  passType:string = "password";
  passShow:boolean = false;

  constructor(private router:Router, private helperService:HelperService) { }

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
    if (this.email == "user" && this.pass == "123"){
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
