import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <React.Fragment>
          <Switch>
            <Route path="/" exact>
              <Header />
            </Route>
          </Switch>
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App;
