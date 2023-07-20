import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,tap } from 'rxjs';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  urlApiMongo = 'https://apifacturacion-mongodb.azurewebsites.net';
  

  constructor(private apimongo: HttpClient) { }

  parametro(token: string): Observable<any> {
    let headers = new HttpHeaders().set('access-token', token);
    return this.apimongo.get(this.urlApiMongo + '/parametros', { headers: headers });
  }
  cliente(token: string): Observable<any> {
    let headers = new HttpHeaders().set('access-token', token);
    return this.apimongo.get(this.urlApiMongo + '/clientes', { headers: headers });
  }
  producto(token: string): Observable<any> {
    let headers = new HttpHeaders().set('access-token', token);
    return this.apimongo.get(this.urlApiMongo + '/productos', { headers: headers });
  }
  factura(token: string): Observable<any> {
    let headers = new HttpHeaders().set('access-token', token);
    console.log(token + " factura"); // Mover esta línea antes del return
    return this.apimongo.get(this.urlApiMongo + '/facturacabs', { headers: headers });
  }
  crearCliente(token: string, cliente: any): Observable<any> {
    let headers = new HttpHeaders().set('access-token', token);
    return this.apimongo.post(this.urlApiMongo + '/clientes', cliente, { headers: headers });
  }
  crearFactura(token: string, factura: any): Observable<any> {
    let headers = new HttpHeaders().set('access-token', token);
    return this.apimongo.post(this.urlApiMongo + '/facturacabs', factura, { headers: headers });
  }
  
  crearProducto(token: string, producto: any): Observable<any> {
    let headers = new HttpHeaders().set('access-token', token);
    let formData = new FormData();
    formData.append('codigo_producto', producto.codigo_producto); // Adjunta los demás campos del producto al formulario de datos
    formData.append('nombre', producto.nombre);
    formData.append('descripcion', producto.descripcion);
    formData.append('precio_unitario', producto.precio_unitario);
    formData.append('existencia', producto.existencia);
    formData.append('tiene_impuesto', producto.tiene_impuesto);
    formData.append('image_producto', producto.image_producto); // Adjunta la imagen al formulario de datos

    return this.apimongo.post<any>(`${this.urlApiMongo}/productos`, formData, { headers: headers });
  }


  borrarCliente(token: string, id: any): Observable<any> {
    let headers = new HttpHeaders().set('access-token', token);
    const url = `${this.urlApiMongo}` + '/clientes/' + `${id}`;
    console.log(token + " id"); 
    return this.apimongo.delete(url, { headers: headers });
  }
  borrarProducto(token: string, id: any): Observable<any> {
    let headers = new HttpHeaders().set('access-token', token);
    const url = `${this.urlApiMongo}` + '/productos/' + `${id}`;
    console.log(token + " id"); 
    return this.apimongo.delete(url, { headers: headers });
  }  

}