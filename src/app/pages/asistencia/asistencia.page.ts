import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  clasesAsistidas:number = 17; //Ejemplo
  clasesTotal:number = 23 //Ejemplo
  clasesPorcentaje:number = 0

  constructor() { }

  ngOnInit() {
    this.clasesPorcentaje=((this.clasesAsistidas*100)/23)/100
  }

  

  
  
}
