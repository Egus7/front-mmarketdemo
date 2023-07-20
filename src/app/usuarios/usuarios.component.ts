import { Component, OnInit,Input } from "@angular/core";
import { ApiService } from "../service/api.service";
import { Router } from "@angular/router";

@Component({
selector: 'app-login',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})

export class UsuariosComponent implements OnInit{
    
    usuarios: any =[];
    modalVisible: boolean = false;
    @Input() usuarioInsertar:any = {};
    
    
    constructor(private api: ApiService, private route: Router, private _usuario: ApiService){}
    ngOnInit() {
        this.get();
      }
    
      
    get() {
      let token = localStorage.getItem('token') + ''; // Obtén el token del localStorage o de donde lo hayas almacenado
      return this.api.usuario(token).subscribe((data: {}) => {
        this.usuarios = data ;
        console.log(this.usuarios);
      });
  }

    abrirModal() {
        this.modalVisible = true;
        // Puedes inicializar las propiedades del usuario aquí si lo deseas
        
        this.usuarioInsertar.id_seg_usuario = '';
        this.usuarioInsertar.codigo = '';
        this.usuarioInsertar.apellidos = '';
        this.usuarioInsertar.nombres = '';
        this.usuarioInsertar.correo = '';
        this.usuarioInsertar.clave = '';
        this.usuarioInsertar.activo = true;
    
      }
    
    cerrarModal() {
      this.modalVisible = false;
    }
  
  
    eliminarUsuario(id: any) {
      let token = localStorage.getItem('token') + '';
      if(window.confirm('Esta seguro que desea eliminar el usuario id:'+ id)) {
        this.api.borrarUsuario(token, id).subscribe(data => {
          this.get();
        })
      }
    }
  }
