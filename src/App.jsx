import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Landing from './containers/Landing';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
