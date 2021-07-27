import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { IngresoDonaciones } from './index';

describe('Pruebas en el componente <FormData />', () => {
  const FormEntry = renderer.create(<IngresoDonaciones />).toJSON();
  const page = mount(<IngresoDonaciones />);
  test('Debe crear el Snapshot del componente', () => {
    expect(FormEntry).toMatchSnapshot();
  });

  test('Renderizar el título', () => {
    expect(page.find('h5').text()).toEqual('Información de donación');
  });

  test('Validar que existan cinco campos de entrada renderizados', () => {
    const cantidadDeInputs = 5;
    expect(page.find('input').length).toEqual(cantidadDeInputs);
  });

  test('Comprobar la existencia del boton ´Guardar´', () => {
    expect(page.find('button').text()).toEqual('Guardar');
    expect(page.find('button').length).toEqual(1);
  });
});
