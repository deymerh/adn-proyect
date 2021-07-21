import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FormPage from '../pages/FormPage';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact component={FormPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
