import { createContext, useContext } from 'react';
import { DescriptionMoney } from '../pages/FormPage/models/DescriptionMoney';

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
    // eslint-disable-next-line
    console.log('Hola');
  },
});
// eslint-disable-next-line
export const GlobalContext = () => useContext(DataContext);
