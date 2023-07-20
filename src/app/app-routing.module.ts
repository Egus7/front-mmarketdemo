import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
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
const routes: Routes = [  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'usuarios', component: UsuariosComponent  },
  { path: 'home', component: HomeComponent},
  { path: 'creacionUsuarios', component:CreacionUsuarioComponent },
  { path: 'edicionUsuario/:id_seg_usuario', component:EdicionUsuarioComponent },
  { path: 'creacionProyectos', component:CreacionProyectoComponent},
  { path: 'proyectos', component:ProyectosComponent},
  { path: 'parametros', component:ParametrosComponent},
  { path: 'clientes', component:ClientesComponent},
  { path: 'creacionClientes', component:CreacionClientesComponent},
  { path: 'productos', component:ProductosComponent},
  { path: 'creacionProductos', component:CreacionProductosComponent},
  { path: 'facturas', component:FacturaComponent},

  { path: 'creacionFacturas', component:CreacionFacturaComponent},
  { path:"**", redirectTo: 'login'},
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
