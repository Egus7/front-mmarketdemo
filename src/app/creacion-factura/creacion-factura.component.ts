import { Component,OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service.mongo';
@Component({
  selector: 'app-creacion-factura',
  templateUrl: './creacion-factura.component.html',
  styleUrls: ['./creacion-factura.component.scss']
})
export class CreacionFacturaComponent {
  @Input() factura: any = {

    facturaDetalles: [
      {
        numero_factura_det: 1,
        numero_factura: "FAC-008",
        codigo_producto: 1001,
        cantidad: 2,
        precio_unitario_venta: 30,     
      }
      
    ]
  };

  constructor(
    public router: Router, 
    public ApiService: ApiService
  ) { }

  ngOnInit() {}

  addFactura() {

    console.log('Proyecto a crear:', this.factura); // Agrega este registro de depuración
    let token = localStorage.getItem('token') + ''; 
    this.ApiService.crearFactura(token,this.factura).subscribe((data: {}) => {
      console.log('Respuesta del servidor:', data); // Agrega este registro de depuración
      this.router.navigate(['/factura'])
    })
  }
}
