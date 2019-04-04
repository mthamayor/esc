import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import IndexPage from './IndexPage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import './assets/css/App.css';
import Navigation from './components/Navigation';
import PasswordResetPage from './PasswordResetPage';
import DashboardPage from './DashboardPage';
import { Pages } from './pages';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#43a047' }, // Purple and green play nicely together.
    secondary: { main: '#11cb5f' } // This is just green.A700 as hex.
  },
  typography: {
    fontFamily: ['Oxygen', 'sans-serif'].join(','),
    useNextVariants: true
  }
});

const App = () => {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <Navigation />
        <Route exact path="/" component={IndexPage} />
        <Route path="/auth/login" component={LoginPage} />
        <Route path="/auth/signup" component={SignupPage} />
        <Route path="/auth/forgot-password" component={PasswordResetPage} />
        <Route
          path="/dashboard/:subpage/:optionalpage?"
          component={DashboardPage}
        />
        <Route path="/pages" component={Pages} />
      </MuiThemeProvider>
    </Router>
  );
};

export default App;
