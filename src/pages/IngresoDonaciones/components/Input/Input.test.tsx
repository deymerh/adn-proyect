import { render } from '@testing-library/react';
import { InputText } from './index';
describe('Pruebas en el componente <InputText />', () => {
  
  test('Hacer el render del componente', () => {
    
    const handleInputChange = jest.fn(); 
    const InpuText = render(
        <InputText
          value="Deymer"
          name="nombre"
          onChange={handleInputChange}
          helperText="El nombre es requerido"
          error={false}
        />
      );
    expect(InpuText).toMatchSnapshot();  
  });
  
});
