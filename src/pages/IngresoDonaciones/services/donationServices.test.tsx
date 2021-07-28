import '@testing-library/jest-dom';
import React from 'react';
import { act } from '@testing-library/react-hooks';
import { mount } from 'enzyme';
import { manejadorDonaciones } from './donationServices';
import { IngresoDonaciones } from '../components/FormIngresoDonaciones/index';
import { DataContext } from '../../../context/DataContext';

jest.mock('./donationServices');
jest.mock('../../../context/DataContext');

describe('Pruebas en la función ´manejadorDonaciones´ ', () => {
  const updateGlobalState = jest.fn();
  const globalState = {
    ninos: 0,
    construccion: 0,
    caridad: 0,
    dineroTotal: 0,
    personasDonantes: [],
  };
  const wrapper = mount(
    <DataContext.Provider value={{ globalState, updateGlobalState }}>
      <IngresoDonaciones />
    </DataContext.Provider>,
  );
  test('debe crear el snapshot de con el ´DataContext´ ', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('`updateGlobalState` debe ser llamado con el objeto usuario', () => {
    // Arrange
    const usuario = {
      nombre: 'Deymer',
      id: 708098,
      cantidadDonada: 10000,
      edad: 17,
      fecha: '2021-07-19',
    };
    // Act
    act(() => {
      manejadorDonaciones(usuario, globalState, updateGlobalState);
      updateGlobalState(usuario);
    });
    // Assert
    expect(manejadorDonaciones).toBeCalledTimes(1);
    expect(updateGlobalState).toHaveBeenCalledWith(usuario);
  });
});
