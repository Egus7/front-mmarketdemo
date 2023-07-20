import { Component,OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { ToastrService } from 'ngx-toastr'; 
@Component({
  selector: 'app-creacion-usuario',
  templateUrl: './creacion-usuario.component.html',
  styleUrls: ['./creacion-usuario.component.scss']
})
export class CreacionUsuarioComponent {
  @Input() usuario: any = {
    activo: true 
  };


  constructor(
    public router: Router, 
    public ApiService: ApiService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {}
/*
  addUsuario() {
    console.log('Usuario a crear:', this.usuario);
    let token = localStorage.getItem('token') + '';
    this.ApiService.crearUsuario(token, this.usuario).subscribe(
      (response: any) => {
        console.log('Respuesta del servidor:', response);
        if (response && response.status === 201 && !response.ok) {
          this.toastr.success(response.error, 'Éxito'); // Mostrar el mensaje de éxito del servidor
          this.router.navigate(['/usuarios']); // Redireccionar a la página de usuarios
        } else {
          this.toastr.error('Error al crear el Usuario', 'Error');
        }
      },
      (error: any) => {
        console.error('Error al crear el usuario:', error);
        this.toastr.error('Error al crear el Usuario', 'Error');
      }
    );
  }
  */

  
 addUsuario() {
    console.log('Usuario a crear:', this.usuario); // Agrega este registro de depuración
    let token = localStorage.getItem('token') + ''; 
    this.ApiService.crearUsuario(token,this.usuario).subscribe((data: {}) => {
      console.log('Respuesta del servidor:', data); // Agrega este registro de depuración
      this.toastr.success('Usuario creado correctamente', 'Éxito'); // Mensaje de éxito
      this.router.navigate(['/usuarios'])
    })
 }
  
}
