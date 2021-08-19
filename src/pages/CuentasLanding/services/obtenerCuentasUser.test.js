import {obtenerCuentasUser} from './obtenerCuentasUser';
describe('Prueba en la funcion `obtenerCuentasUser` ', () => {
  test('La funcion debe retonar las cuentas del ususario', async() => {
    const respuesta = await obtenerCuentasUser();
    expect(respuesta.length).toBe(3);
  });
});