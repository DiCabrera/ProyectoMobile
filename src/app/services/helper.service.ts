import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private alertService:AlertController,private router:Router) { }

  async showAlert(msg:string, title:string){
    var alert = await this.alertService.create({
      cssClass:"alertClass", message:msg,header:title, buttons:['Aceptar']});
    
    await alert.present();
    return alert;
  }

  async confirmAlert(msg:string){
    var alert = await this.alertService.create({
      cssClass:"alertClass",message:msg,buttons:["Aceptar"]})

      await alert.present();
      this.router.navigate(["/login"])
      return alert;
      
  }

  async showConfirm(message:string,btn_confirmar:string,btn_cancelar:string){
    let promise = new Promise<boolean>(async (resolve)=>{
      var alert = await this.alertService.create({cssClass:"",message:message,buttons:[
        {
          text:btn_confirmar,
          handler: () =>{
            resolve(true);
          }
        },
        {
          text:btn_cancelar,
          role: 'cancel',
          handler: () =>{
            resolve(false);
          }
        }
      ]})
      await alert.present();

    })
    return promise;
  }
}