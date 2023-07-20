import { Component,OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service.mongo';
@Component({
  selector: 'app-creacion-clientes',
  templateUrl: './creacion-clientes.component.html',
  styleUrls: ['./creacion-clientes.component.scss']
})
export class CreacionClientesComponent {
    @Input() cliente: any = {};
  
    constructor(
      public router: Router, 
      public ApiService: ApiService
    ) { }
  
    ngOnInit() {}

    get() {
      let token = localStorage.getItem('token') + ''; // Obtén el token del localStorage o de donde lo hayas almacenado
      return this.ApiService.cliente(token).subscribe((data: {}) => {
        this.cliente = data ;
        console.log(this.cliente);
      });
  }
  
    addCliente() {
      console.log('Proyecto a crear:', this.cliente); // Agrega este registro de depuración
      let token = localStorage.getItem('token') + ''; 
      this.ApiService.crearCliente(token,this.cliente).subscribe((data: {}) => {
        console.log('Respuesta del servidor:', data); // Agrega este registro de depuración
        this.router.navigate(['/clientes'])
      })
    }
    
    eliminarCliente(id: any) {
      let token = localStorage.getItem('token') + '';
      if(window.confirm('Esta seguro que desea eliminar el proyecto por  id:'+ id)) {
        this.ApiService.borrarCliente(token, id).subscribe(data => {
          this.get();
        })
      }
    }
}
