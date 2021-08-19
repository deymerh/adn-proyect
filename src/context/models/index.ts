export interface Cuenta {
  idCuenta: number;
  tipoCuenta: string;
  estado: number;
  valorDisponible: number;
}
export interface CuentasUserArray {
  CuentasUser: Array<Cuenta>;
}
