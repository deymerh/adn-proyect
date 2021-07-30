import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MostrarDonaciones from './index';

describe('Pruebas en el <MostrartDonaciones/>', () => {
  const page = render(
    <BrowserRouter>
      <MostrarDonaciones/>
    </BrowserRouter>
  );
  test('Crear el SnapShot del compoente', () => {
    expect(page).toMatchSnapshot();
  });
  test('Que tenga el titulo de los donantes', () => {
  render(
    <BrowserRouter>
      <MostrarDonaciones/>
    </BrowserRouter>
  );
  const text1 = screen.getByText('Información de donantes');
  expect(text1).toBeInTheDocument();
  });

  test('Que tenga el titulo de la cantidad por departamentos', () => {
  render(
    <BrowserRouter>
      <MostrarDonaciones/>
    </BrowserRouter>
  );
  const text2 = screen.getByText('Información de fondos generales');
  expect(text2).toBeInTheDocument();
  });
  
});
