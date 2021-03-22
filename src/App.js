import React, { createContext } from 'react';
import LoginPage from './pages/LoginPage';
import { createUseStyles } from 'react-jss';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const UserContext = createContext();

function App() {
  const user = {
    match: false,
  };
  const UseStyles = createUseStyles({
    wrapper: {
      width: '100%',
      height: '120vh',
      backgroundColor: '#f0f2f5',
      border: 'black solid 2px',
      paddingLeft: '5%',
      paddingRight: '5%',
    },
    inner: {
      margin: '0% 5% 5% 5%',
      width: '90%',
    },
  });
  const classes = UseStyles();
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' exact component={LoginPage} />
          <Route path='/homepage' exact component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
