import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service.mongo';
import { Router } from '@angular/router';
@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})
export class FacturaComponent implements OnInit {
  facturas: any = [];

  constructor(private api: ApiService, private route: Router) {}

  ngOnInit() {
    this.get();
  }

  get() {
    let token = localStorage.getItem('token') + ''; // Obtén el token del localStorage o de donde lo hayas almacenado
    this.api.factura(token).subscribe((data: any) => {
      this.facturas = data;
      console.log(this.facturas);
    });
  }

  toggleTable(facturaId: number) {
    const detalleFacturaTable = document.getElementById('detalleFacturaTable' + facturaId);

    // Comprueba si detalleFacturaTable no es nulo antes de acceder a sus propiedades
    if (detalleFacturaTable !== null) {
      if (detalleFacturaTable.style.display === 'none') {
        detalleFacturaTable.style.display = 'block';
      } else {
        detalleFacturaTable.style.display = 'none';
      }
    }
  }
}
