import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-edicion-usuario',
  templateUrl: './edicion-usuario.component.html',
  styleUrls: ['./edicion-usuario.component.scss']
})
export class EdicionUsuarioComponent implements OnInit {

  
  id = this.actRoute.snapshot.params['id_seg_usuario'];
  usuarioEdicion: any = {};

  constructor(
    public api: ApiService,
    public actRoute: ActivatedRoute,
    public router: Router  
  ) {  
    }

  ngOnInit() {
    let token = localStorage.getItem('token') + ''; 
    this.api.usuarioById(token, this.id).subscribe((data: {}) => {
      this.usuarioEdicion = data;
      console.log("data: ", data)
    });
  }

  //actualizar el usuario:
  actualizarUsuario() {
    if (window.confirm('¿Estás seguro de que deseas actualizar?')) {
      let token = localStorage.getItem('token') + ''; 
      this.api.actualizarUsuarios(token, this.id, this.usuarioEdicion).subscribe(data => {
        console.log('Usuario actualizado:', data);
        this.router.navigate(['/usuarios']);
      })
    }
  }
  
}
