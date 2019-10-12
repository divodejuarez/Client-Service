import React from 'react';
import { 
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Navigation from '../Navigation';
import Landing from '../Landing';
import AdminRoutines from '../AdminRoutines';
import CheckRoutines from '../CheckRoutines';
import LogRoutines from '../LogRoutines';
import PasswordForget from '../PasswordForget';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import Subscribe from '../Subscribe';

import * as ROUTES from '../../constants/routes';

const App = () => (
    <Router>
        <div>
            <Navigation />
            <hr />
            
            <Route exact path={ ROUTES.LANDING } component={ Landing } />
            <Route path={ ROUTES.SIGN_UP } component={ SignUp } />
            <Route path={ ROUTES.SIGN_IN } component={ SignIn } />
            {/* <Route path={ ROUTES.SUBSCRIBE } component={ Subscribe } /> */}
            {/* <Route path={ ROUTES.PASSWORD_FORGET } component={ PasswordForget } /> */}
            {/* <Route path={ ROUTES.LOG_ROUTINES } component={ LogRoutines } /> */}
            {/* <Route path={ ROUTES.ADMIN_ROUTINES } component={ AdminRoutines } /> */}
            {/* <Route path={ ROUTES.CHECK_ROUTINES } component={ CheckRoutines } /> */}
        </div>
    </Router>
);

export default App;