import '@testing-library/jest-dom';
import React from 'react';
import { manejadorDonaciones } from './donationServices';

jest.mock('./donationServices');

describe('Pruebas en la función handleDonations', () => {
  test('deberia llamar `setInitialSate` con un nuevo estado', () => {
    // Arrange
    const values = {
      nombre: 'Deymer',
      id: 708098,
      cantidadDonada: 10000,
      edad: 17,
      fecha: '2021-07-19',
    };
    const globalState = {
      ninos: 0,
      construccion: 0,
      caridad: 0,
      dineroTotal: 0,
      personasDonantes: [],
    };
    const setInitialSate = jest.fn();
    
    // Act
    manejadorDonaciones(values, globalState, setInitialSate);
    setInitialSate(values);
    // Assert
    expect(manejadorDonaciones).toBeCalledTimes(1);
    expect(setInitialSate).toHaveBeenCalledWith(values);
    console.log(globalState);
  });
});
