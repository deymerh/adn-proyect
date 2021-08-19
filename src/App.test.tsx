import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Texto "Información de mis cuentas" ', () => {
  const wrapper = render(<App />);
  expect(wrapper).toMatchSnapshot();
});
