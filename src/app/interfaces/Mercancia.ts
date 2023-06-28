import { Zona } from "./Zona";

export interface Mercancia {
  nombre: string;
  descripcion: string;
  fechaEntrada: string;
  motivoDevolucion: string;
  volumenOcupado: number;
  idZona: Zona;
}
