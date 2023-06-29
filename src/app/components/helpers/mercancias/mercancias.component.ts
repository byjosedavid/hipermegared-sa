import { Component } from '@angular/core';
import { Mercancia } from 'src/app/interfaces/Mercancia';
import { MercanciaService } from 'src/app/services/mercancia/mercancia.service';

@Component({
  selector: 'app-mercancias',
  templateUrl: './mercancias.component.html',
  styleUrls: ['./mercancias.component.css'],
})
export class MercanciasComponent {
  public mercancias: Mercancia[] = [];

  public constructor(public request: MercanciaService) {
    this.request.getMercancias().subscribe((res) => {
      console.log(res);
      this.mercancias = res;
    });
  }
}
