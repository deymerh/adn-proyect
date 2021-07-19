import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ShowMoney from '../pages/ShowMoney';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/show" component={ShowMoney} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
