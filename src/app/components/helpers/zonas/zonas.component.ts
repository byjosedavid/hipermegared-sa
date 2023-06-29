import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';
import { Zona } from 'src/app/interfaces/Zona';
import { MercanciaService } from 'src/app/services/mercancia/mercancia.service';
import { ZonaService } from 'src/app/services/zona/zona.service';

@Component({
  selector: 'app-zonas',
  templateUrl: './zonas.component.html',
  styleUrls: ['./zonas.component.css']
})
export class ZonasComponent {
  public zonas: Zona[] = []

  public constructor(public request: ZonaService){
    this.request.getZonas().subscribe((res)=>{
      console.log(res)
      this.zonas = res
    })
  }

}
