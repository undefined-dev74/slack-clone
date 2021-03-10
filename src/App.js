import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// * Components
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat'
import './App.css';
import styled from 'styled-components';

function App() {
  return (
    <div className="app">
      <Router>
        <React.Fragment>
          <Header />
          <AppBody>
            <Sidebar />
            <Switch>
              <Route path="/" exact>
                {/* Chat */}
                <Chat />
              </Route>
            </Switch>
          </AppBody>
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
