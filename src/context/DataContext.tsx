import { createContext, useContext } from 'react';
import { DescriptionMoney } from '../models/DescriptionMoney';

export type GlobalContent = {
  globalState: DescriptionMoney;
  updateGlobalState: (p: DescriptionMoney) => void;
};

export const DataContext = createContext<GlobalContent>({
  globalState: {
    kids: 0,
    building: 0,
    charity: 0,
    moneyTotal: 0,
    donors: [],
  },
  updateGlobalState: (p: DescriptionMoney) => {
    console.log('Hola');
  },
});

export const useGlobalContext = () => useContext(DataContext);
