import { mount } from 'enzyme'
import renderer from 'react-test-renderer';
import { EnvelopeDataEntryForm } from './index';
import { DataContext } from './../../../../context/DataContext';

describe('Pruebas en el componente <FormData />', () => {
  
  const FormEntry = renderer.create(<EnvelopeDataEntryForm />).toJSON();
  const page = mount(<EnvelopeDataEntryForm />)
  test('Debe crear el Snapshot del componente', () => {
    expect(FormEntry).toMatchSnapshot();
  });

  test('Renderizar el título', () => {
    expect(page.find('h5').text()).toEqual('Información de donación');
  });
  
  test('Validar que existan cinco campos de entrada renderizados', () => {
    expect(page.find('input').length).toEqual(5);
  });

  test('Comprobar la existencia del boton ´Guardar´', () => {
    expect(page.find('button').text()).toEqual('Guardar');
    expect(page.find('button').length).toEqual(1);
  });
  
});
