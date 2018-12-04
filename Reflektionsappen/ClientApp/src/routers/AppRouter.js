import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Reflections from '../components/Reflections/Reflections';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';


// BrowserRouter has a history built in
// It needs a single route element, that is encompass everything in a div
// Instead of BrowserRouter we can use Router
// Router enables us to create and have our own history
// Because otherwise we cannot keep track of things link login/ logout
// because they are not part of the history of the application.

export const history = createHistory();

const AppRouter=()=>(
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/reflections" component={Reflections} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
