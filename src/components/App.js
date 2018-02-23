import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Ants from './Ants';
import SingleAnt from './SingleAnt';


const App = () => (
  <div className="App">
    <Navbar />
    <main>
      <Switch>
        <Route
          exact
          path="/ants/:antId"
          component={SingleAnt} />
        <Route
          exact
          path="/ants"
          component={Ants} />
        <Route
          exact
          path="/"
          component={Home} />
      </Switch>
    </main>
  </div>
);

export default App;
