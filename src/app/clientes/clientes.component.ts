import { Component, OnInit,Input } from "@angular/core";
import { ApiService } from "../service/api.service.mongo";
import { Router } from "@angular/router";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent {
  clientes: any =[];
  modalVisible: boolean = false;
  
  
  constructor(private api: ApiService, 
    private route: Router, 
    private _cliente: ApiService){}
  ngOnInit() {
      this.get();
    }

    get() {
      let token = localStorage.getItem('token') + ''; // Obtén el token del localStorage o de donde lo hayas almacenado
      return this.api.cliente(token).subscribe((data: {}) => {
        this.clientes = data ;
        console.log(this.clientes);
      });
  }
  eliminarCliente(id: any) {
    let token = localStorage.getItem('token') + '';
    if(window.confirm('Esta seguro que desea eliminar el cliente por  id:'+ id)) {
      this.api.borrarCliente(token, id).subscribe(data => {
        this.get();
      })
    }
  }
}
