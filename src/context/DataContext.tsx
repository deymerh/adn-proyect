import { createContext, useContext } from 'react';
import { DepartamentosFundacion } from '../pages/IngresoDonaciones/models/DepartamentosFundacion';

export type GlobalContent = {
  globalState: DepartamentosFundacion;
  updateGlobalState: (p: DepartamentosFundacion) => void;
};

export const DataContext = createContext<GlobalContent>({
  globalState: {
    ninos: 0,
    construccion: 0,
    caridad: 0,
    dineroTotal: 0,
    personasDonantes: [],
  },
  updateGlobalState: (p: DepartamentosFundacion) => {
    // eslint-disable-next-line
    console.log('Hola');
  },
});
// eslint-disable-next-line
export const GlobalContext = () => useContext(DataContext);
