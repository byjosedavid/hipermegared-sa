import { Zona } from './Zona';

export interface Mercancia {
  name: string;
  description: string;
  entryDate: string;
  returnReason: string;
  volume: number;
  zones: Zona;
}
