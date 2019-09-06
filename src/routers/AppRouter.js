import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from '../components/HomePage'
import StatePage from '../components/StatePage'
import Header from '../components/Header'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header></Header>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/state/:slug" component={StatePage} exact={true} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;