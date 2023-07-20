import { Component,OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-creacio-proyecto',
  templateUrl: './creacion-proyecto.component.html',
  styleUrls: ['./creacion-proyecto.component.scss']
})
export class CreacionProyectoComponent {
  @Input() proyecto: any = {};

  constructor(
    public router: Router, 
    public ApiService: ApiService
  ) { }

  ngOnInit() {}

  addProyecto() {
    console.log('Proyecto a crear:', this.proyecto); // Agrega este registro de depuración
    let token = localStorage.getItem('token') + ''; 
    this.ApiService.crearProyecto(token,this.proyecto).subscribe((data: {}) => {
      console.log('Respuesta del servidor:', data); // Agrega este registro de depuración
      this.router.navigate(['/proyectos'])
    })
  }
}