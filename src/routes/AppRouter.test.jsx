import { render } from '@testing-library/react';
import AppRouter from './AppRouter';

describe('Pruebas en el <AppRouter/>', () => {
  test('Crear el SnapShot del compoente', () => {
    const page = render(<AppRouter/>)
    expect(page).toMatchSnapshot();
  });
  
});
