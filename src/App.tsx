import React, { useState, useEffect } from 'react';
import AppRouter from './routes/AppRouter';
import { DataContext } from './context/DataContext';
import { DepartamentosFundacion } from './pages/IngresoDonaciones/models/DepartamentosFundacion';

const App: React.FC = () => {
  const [globalState, updateGlobalState] = useState<DepartamentosFundacion>({
    ninos: 0,
    construccion: 0,
    caridad: 0,
    dineroTotal: 0,
    personasDonantes: [],
  });
  useEffect(() => {
    localStorage.setItem('globalState', JSON.stringify(globalState));
  }, [globalState]);
  return (
    <DataContext.Provider value={{ globalState, updateGlobalState }}>
      <AppRouter />
    </DataContext.Provider>
  );
};

export default App;
