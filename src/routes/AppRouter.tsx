import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LayoutIngresoDonaciones from '../pages/IngresoDonaciones/index';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact component={LayoutIngresoDonaciones} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
