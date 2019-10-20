import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

const Navigation = ({ authUser }) => (
    <div>{ authUser ? <NavigationAuth /> :<NavigationNonAuth /> }</div>
);

const NavigationAuth = () => (
    <div>
        <ul>
            <li>
                <Link to={ROUTES.HOME}>Home</Link>
            </li>
            <li>
                <Link to={ROUTES.ACCOUNT}>Account</Link>
            </li>
            <li>
                <Link to={ROUTES.SUBSCRIBE}>Subscribe Client</Link>
            </li>
            <li>
                <SignOutButton />
            </li>
        </ul>
    </div>
);

const NavigationNonAuth = () =>  (
    <div>
        <ul>
            <li>
                
            </li>
        </ul>
    </div>
);

export default Navigation;