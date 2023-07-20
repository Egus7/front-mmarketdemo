import { Component, OnInit,Input } from '@angular/core';
import { ApiService } from '../service/api.service.mongo';
import { Router } from "@angular/router";

@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.scss']
})
export class ParametrosComponent {
  parametros: any =[];
  modalVisible: boolean = false;
  
  
  constructor(private api: ApiService, 
    private route: Router, 
    private _parametro: ApiService){}
  ngOnInit() {
      this.get();
    }

    get() {
      let token = localStorage.getItem('token') + ''; // Obtén el token del localStorage o de donde lo hayas almacenado
      return this.api.parametro(token).subscribe((data: {}) => {
        this.parametros = data ;
        console.log(this.parametros);
      });
  }
}
