import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Texto "Información de donación renderizado" ', () => {
  render(<App />);
  const text = screen.getByText('Ingresar donación');
  expect(text).toBeInTheDocument();
});
