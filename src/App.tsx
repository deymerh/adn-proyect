import React, { useState, useEffect } from 'react';
import AppRouter from './routes/AppRouter';
import { DataContext } from './context/DataContext';
import { CuentasUserArray } from './context/models/index';

const App: React.FC = () => {
  const [globalState, updateGlobalState] = useState<CuentasUserArray>({
    CuentasUser: [],
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
