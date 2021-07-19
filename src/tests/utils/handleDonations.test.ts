import React from 'react';
import { render, screen } from '@testing-library/react';
import { handleDonations } from '../../utils/handleDonations';
import { useGlobalContext } from '../../context/DataContext';
describe('Pruebas en la función handleDonations', () => {
  
  const { globalState, updateGlobalState } = useGlobalContext();
  test('Debería actualizar los valores del DataContext', () => {
    
    
  });
  
});
