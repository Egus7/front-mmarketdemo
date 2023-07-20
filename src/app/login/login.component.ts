import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @Input() codigo: any  = {};
  clave: any = {}
  errorMensaje: string = ''; // Variable para almacenar el mensaje de error

  constructor(
    public apiService: ApiService, 
    public route:Router
    )  {}
  ngOnInit(){}
  logearse() {

      this.apiService.login(this.codigo, this.clave).subscribe((data: {}) => {

          // Aquí puedes realizar la validación del token o almacenarlo en el localStorage
          this.route.navigate(['/home'])
        },
        (error) => {
          // Error al iniciar sesión, muestra un mensaje de error
          this.errorMensaje = 'Usuario o clave incorrecta';
        }
      );
    }
    
    ngform(): void {
      this.ngOnInit()
     }
  }

