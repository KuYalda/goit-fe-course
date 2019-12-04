import React, { useEffect } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import routes from './routes';
import * as API from './services/api';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import ShowsPage from './components/ShowsPage';
import PageNotFound from './components/PageNotFound';
import ShowDetailsPage from './components/ShowDetailsPage';

const App = () => {
  const fetchFilms = q => {
    API.searchShows(q).then(({ data }) => console.log('data :', data));
  };
  useEffect(() => fetchFilms());

  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path={routes.HOME} component={HomePage} />
        <Route path={routes.SHOWS} component={ShowsPage} />
        <Route path={routes.SHOW_DETAIL} component={ShowDetailsPage} />
        <Route component={PageNotFound} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
