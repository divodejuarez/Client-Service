import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

const Navigation = () => (
    <div>
        <ul>
            {/* <li>
                <Link to={ ROUTES.LANDING }>Landing</Link>
            </li> */}
            <li>
                <Link to={ ROUTES.SIGN_IN }> Sign In</Link>
            </li>
            <li>
                <Link to={ ROUTES.SIGN_UP }>Sign Up</Link>
            </li>
            <li>
                <SignOutButton />
            </li>
            {/* <li>
                <Link to={ ROUTES.SUBSCRIBE }>Subscribe</Link>
            </li>
            <li>
                <Link to={ ROUTES.ADMIN_ROUTINES }>Admin Routines</Link>
            </li>
            <li>
                <Link to={ ROUTES.CHECK_ROUTINES }>Check Routines</Link>
            </li>
            <li>
                <Link to={ ROUTES.LOG_ROUTINES }>Log Routines</Link>
            </li>
            <li>
                <Link to={ ROUTES.PASSWORD_FORGET }>Password Forget</Link>
            </li> */}
        </ul>
    </div>
);

export default Navigation;