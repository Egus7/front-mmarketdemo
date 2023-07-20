import { Component, OnInit,Input } from '@angular/core';
import { ApiService } from '../service/api.service.mongo';
import { Router } from "@angular/router";
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {
  productos: any =[];
  modalVisible: boolean = false;
  @Input() productoInsertar:any = {};
  
  
  constructor(private api: ApiService, 
    private route: Router, 
    private _producto: ApiService){}
  ngOnInit() {
      this.get();
    }

    get() {
      let token = localStorage.getItem('token') + ''; // Obtén el token del localStorage o de donde lo hayas almacenado
      return this.api.producto(token).subscribe((data: {}) => {
        this.productos = data ;
        console.log(this.productos);
      });
  }
  eliminarProducto(id: any) {
    let token = localStorage.getItem('token') + '';
    if(window.confirm('Esta seguro que desea eliminar el proyecto por  id:'+ id)) {
      this.api.borrarProducto(token, id).subscribe(data => {
        this.get();
      })
    }
  }
}
