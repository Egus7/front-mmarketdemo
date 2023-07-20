import { Component, OnInit,Input } from '@angular/core';
import { ApiService } from "../service/api.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {


  proyectos: any =[];
  modalVisible: boolean = false;
  @Input() proyectoInsertar:any = {};
  
  
  constructor(private api: ApiService, 
    private route: Router, 
    private _proyecto: ApiService){}
  ngOnInit() {
      this.get();
    }
  
    
  get() {
    let token = localStorage.getItem('token') + ''; // Obtén el token del localStorage o de donde lo hayas almacenado
    return this.api.proyecto(token).subscribe((data: {}) => {
      this.proyectos = data ;
      console.log(this.proyectos);
    });
}

  abrirModal() {
      this.modalVisible = true;
      // Puedes inicializar las propiedades del usuario aquí si lo deseas
      
      this.proyectoInsertar.id_pry_proyecto = '';
      this.proyectoInsertar.nombre = '';
      this.proyectoInsertar.fecha_inicio = '';
      this.proyectoInsertar.fecha_fin = '';
      this.proyectoInsertar.estado = '';
      this.proyectoInsertar.avance = '';
  
    }
  
  cerrarModal() {
    this.modalVisible = false;
  }

  eliminarProyecto(id: any) {
    let token = localStorage.getItem('token') + '';
    if(window.confirm('Esta seguro que desea eliminar el proyecto por  id:'+ id)) {
      this.api.borrarProyecto(token, id).subscribe(data => {
        this.get();
      })
    }
  }
}
