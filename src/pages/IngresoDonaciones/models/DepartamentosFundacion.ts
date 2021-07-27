import { Donante } from './Donante';

export interface DepartamentosFundacion {
  construccion: number;
  caridad: number;
  dineroTotal: number;
  ninos: number;
  personasDonantes: Array<Donante>;
}
