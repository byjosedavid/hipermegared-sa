import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZonaService {

  constructor(public servicio: HttpClient) { }

  public getZonas(): Observable<any>{
    let url = 'http://localhost:8080/api/v1/zona/'
    return this.servicio.get(url)
  }
}
