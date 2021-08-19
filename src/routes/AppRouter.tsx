import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CuentasLanding } from '../pages/CuentasLanding/index';
import { VerDetalleCuenta } from '../pages/VerDetalleCuenta/index';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact component={CuentasLanding} />
          <Route path="/cuenta" exact component={VerDetalleCuenta} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
