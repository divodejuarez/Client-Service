import React from 'react';
import {  BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import Landing from '../Landing';
import AdminRoutines from '../AdminRoutines';
import LogRoutines from '../LogRoutines';
import PasswordForget from '../PasswordForget';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import Subscribe from '../Subscribe';
import Home from '../Home';
import Account from '../Account';

import * as ROUTES from '../../constants/routes';

import { withAuthentication } from '../Session';

const App = () => (
    <Router>
        <div>
            <Navigation />
            <hr />
    
            <Route exact path={ ROUTES.LANDING } component={ Landing } />
            <Route path={ ROUTES.SIGN_UP } component={ SignUp } />
            <Route path={ ROUTES.SIGN_IN } component={ SignIn } />
            <Route path={ ROUTES.PASSWORD_FORGET } component={ PasswordForget }/>
            <Route path={ ROUTES.HOME } component={ Home }/>
            <Route path={ ROUTES.ACCOUNT } component={ Account }/>
            <Route path={ ROUTES.SUBSCRIBE } component={ Subscribe }/>
            <Route path={ ROUTES.LOG_ROUTINES} component={ LogRoutines }/>
            <Route path={ ROUTES.ADMIN_ROUTINES } component={ AdminRoutines }/>
        </div>
    </Router>
);

export default withAuthentication(App);