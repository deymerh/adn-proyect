import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ContainerDonaciones from '../pages/IngresoDonaciones/index';
import MostrartDonaciones from '../pages/MostrarDonaciones/index';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact component={ContainerDonaciones} />
          <Route path="/donaciones" exact component={MostrartDonaciones} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
