import { createContext } from 'react';
import { CuentasUserArray } from './models';

export type GlobalContent = {
  globalState: CuentasUserArray;
  updateGlobalState: (p: CuentasUserArray) => void;
};

export const DataContext = createContext<GlobalContent>({
  globalState: {
    CuentasUser: [],
  },
  updateGlobalState: (p: CuentasUserArray) => {
    return {};
  },
});
