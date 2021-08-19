import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { OutlinedCard } from './index';

describe('Pruenas en el componente <OutlinedCard/>', () => {
  const props = {
    idCuenta: 123,
    tipoCuenta: 'ahorro',
    estado: 1,
    valorDisponible: 320.5,
  };
  const wrapper = render(
    <BrowserRouter>
      <OutlinedCard {...props} />
    </BrowserRouter>,
  );
  test('Debe renderizar el componente', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
