import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ContainerDonaciones from '../pages/IngresoDonaciones/index';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact component={ContainerDonaciones} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
