import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,tap } from 'rxjs';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  urlApi = 'https://mmarket-apirest.azurewebsites.net/minimarketdemoWeb';



  constructor(private api: HttpClient) { }
  
  login(codigo: string, clave: string) {

    return this.api.post(this.urlApi + '/login', { codigo, clave }).pipe(
      tap((response: any) => {
        const token = response.token; // Suponiendo que el token se encuentra en la propiedad "token" de la respuesta
        localStorage.setItem('token', token); // Guardar el token en el almacenamiento local
      })
    );
  }
  
  server(token: string): Observable<any> {
    let headers = new HttpHeaders().set('access-token', token);

    return this.api.get(this.urlApi + '/services', { headers: headers })
  }
  usuario(token: string): Observable<any> {
    let headers = new HttpHeaders().set('access-token', token);
    return this.api.get(this.urlApi + '/apirest/seguridades/usuarios', { headers: headers });
  }
  proyecto(token: string): Observable<any> {
    let headers = new HttpHeaders().set('access-token', token);
    console.log(token + " proyectos"); // Mover esta línea antes del return
    return this.api.get(this.urlApi + '/apirest/proyectos', { headers: headers });
  }
  usuarioById(token: string, id: any): Observable<any> {
    let headers = new HttpHeaders().set('access-token', token);
    return this.api.get(this.urlApi + '/apirest/seguridades/usuarios/' + id, { headers: headers });
  }
  borrarUsuario(token: string, id: any): Observable<any> {
    let headers = new HttpHeaders().set('access-token', token);
    const url = `${this.urlApi}` + '/apirest/seguridades/usuarios/' + `${id}`;
    console.log(token + " id"); 
    return this.api.delete(url, { headers: headers });
  }  

  borrarProyecto(token: string, id: any): Observable<any> {
    let headers = new HttpHeaders().set('access-token', token);
    const url = `${this.urlApi}` + '/apirest/proyectos/' + `${id}`;
    console.log(token + " id"); 
    return this.api.delete(url, { headers: headers });
  }  
  
  crearUsuario(token: string, usuario: any): Observable<any> {
    let headers = new HttpHeaders().set('access-token', token);
    return this.api.post(this.urlApi + '/apirest/seguridades/usuarios', usuario, { headers: headers });
  }
  crearProyecto(token: string, proyecto: any): Observable<any> {
    let headers = new HttpHeaders().set('access-token', token);
    return this.api.post(this.urlApi + '/apirest/proyectos', proyecto, { headers: headers });
  }

  actualizarUsuarios(token: string, id: any, usuario: any): Observable<any> {
    let headers = new HttpHeaders().set('access-token', token);
    const url = `${this.urlApi}/apirest/seguridades/usuarios/${id}`;
    return this.api.put(url, JSON.stringify(usuario), { headers: headers });
  }
}
