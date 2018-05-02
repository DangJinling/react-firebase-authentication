import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import NoMatch from '../NoMatch';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import withAuthentication from '../Session/withAuthentication';
import * as routes from '../../constants/routes';
import createBrowserHistory from 'history/createBrowserHistory';

import './index.css';

const history = createBrowserHistory();


const App = () =>
  <Router history={history}>
    <div className="app">
      <Navigation />

      <hr/>

      <Switch>
		  <Route exact path={routes.LANDING} component={() => <LandingPage />} />
		  <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
		  <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
		  <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
		  <Route exact path={routes.HOME} component={() => <HomePage />} />
		  <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
		  <Route path='*' component={() => <NoMatch />} />
      </Switch>

      <hr/>

      <span>Found in <a href="https://roadtoreact.com/course-details?courseId=TAMING_THE_STATE">Taming the State in React</a></span> | <span>Star the <a href="https://github.com/rwieruch/react-firebase-authentication">Repository</a></span> | <span>Receive a <a href="https://www.getrevue.co/profile/rwieruch">Developer's Newsletter</a></span>
    </div>
  </Router>

export default withAuthentication(App);
