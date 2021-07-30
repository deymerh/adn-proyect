export interface Donante {
  nombre: string;
  id: number;
  cantidadDonada: number;
  edad: number;
  fecha: string;
}
export type DonanteInit = Partial<Donante>;
