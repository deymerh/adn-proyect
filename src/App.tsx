import React, { useState, useEffect } from 'react';
import AppRouter from './routes/AppRouter';
import { DataContext } from './context/DataContext';
import { DescriptionMoney } from './pages/FormPage/models/DescriptionMoney';

const App: React.FC = () => {
  const [globalState, updateGlobalState] = useState<DescriptionMoney>({
    kids: 0,
    building: 0,
    charity: 0,
    moneyTotal: 0,
    donors: [],
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
