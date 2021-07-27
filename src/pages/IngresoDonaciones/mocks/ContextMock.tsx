import React, { useState } from 'react';
import { DataContext } from '../../../context/DataContext';
import { DepartamentosFundacion } from '../models/DepartamentosFundacion';

export const ContextMock: React.FC = ({ children }) => {
  const [globalState, updateGlobalState] = useState<DepartamentosFundacion>({
    ninos: 0,
    construccion: 0,
    caridad: 0,
    dineroTotal: 0,
    personasDonantes: [],
  });
  return (
    <DataContext.Provider value={{ globalState, updateGlobalState }}>
      {children}
    </DataContext.Provider>
  );
};
