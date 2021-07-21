import React from 'react';
import { render, screen } from '@testing-library/react';

describe('Pruebas en la función handleDonations', () => {
  test('deberia llamar `setInitialSate` con un nuevo estado', () => {
    // Arrange
    const values = {
      name: 'Deymer',
      id: 708098,
      amount: 10000,
      age: 17,
      date: '2021-07-19',
    };
    const globalState = {
      kids: 0,
      building: 0,
      charity: 0,
      moneyTotal: 0,
      donors: [],
    };
    const setInitialSate = jest.fn();
    const handleDonations = jest.fn();
    // Act
    handleDonations(values, globalState, setInitialSate);
    setInitialSate(values);
    // Assert
    expect(handleDonations).toBeCalledTimes(1);
    expect(setInitialSate).toBeCalledWith(values);
  });
});
