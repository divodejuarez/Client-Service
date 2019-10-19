import React, { Component } from 'react';
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

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authUser: null
        };
    }

    render() { 
        return (
            <Router>
                <div>
                    <Navigation authUser={ this.state.authUser }/>
                    <hr />
            
                    <Route exact path={ ROUTES.LANDING } component={ Landing } />
                    <Route path={ ROUTES.SIGN_UP } component={ SignUp } />
                    <Route path={ ROUTES.SIGN_IN } component={ SignIn } />
                </div>
            </Router>
        );
    }
}

export default App;