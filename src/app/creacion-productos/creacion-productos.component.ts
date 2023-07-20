import { Component,OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service.mongo';
@Component({
  selector: 'app-creacion-productos',
  templateUrl: './creacion-productos.component.html',
  styleUrls: ['./creacion-productos.component.scss']
})
export class CreacionProductosComponent {
  @Input() producto: any = {};

  constructor(
    public router: Router, 
    public ApiService: ApiService
  ) { }

  ngOnInit() {}

  addProducto() {
    console.log('Producto a crear:', this.producto); // Agrega este registro de depuración
    let token = localStorage.getItem('token') + ''; 
    this.ApiService.crearProducto(token,this.producto).subscribe((data: {}) => {
      console.log('Respuesta del servidor:', data); // Agrega este registro de depuración
      this.router.navigate(['/productos'])
    })
  }
  cargarImagen(event: any) {
    const archivo = event.target.files[0]; // Obtener el archivo seleccionado
    // Aquí puedes realizar las acciones necesarias con el archivo, como subirlo a un servidor o procesarlo localmente
    // Por ejemplo, puedes mostrar una vista previa de la imagen o almacenarla en una variable en tu componente
    this.producto.image_producto = archivo;
  }
}
