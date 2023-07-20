import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CreacionUsuarioComponent } from './creacion-usuario/creacion-usuario.component';
import { EdicionUsuarioComponent } from './edicion-usuario/edicion-usuario.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { CreacionProyectoComponent } from './creacion-proyecto/creacion-proyecto.component';
import { ParametrosComponent } from './parametros/parametros.component';
import { ClientesComponent } from './clientes/clientes.component';
import { CreacionClientesComponent } from './creacion-clientes/creacion-clientes.component';
import { ProductosComponent } from './productos/productos.component';
import { CreacionProductosComponent } from './creacion-productos/creacion-productos.component';
import { FacturaComponent } from './factura/factura.component';
import { CreacionFacturaComponent } from './creacion-factura/creacion-factura.component';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuariosComponent,
    CreacionUsuarioComponent,
    EdicionUsuarioComponent,
    ProyectosComponent,
    CreacionProyectoComponent,
    ParametrosComponent,
    ClientesComponent,
    CreacionClientesComponent,
    ProductosComponent,
    CreacionProductosComponent,
    FacturaComponent,
    CreacionFacturaComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot()  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
