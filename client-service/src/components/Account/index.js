import React from 'react';

import PasswordForget, { PasswordForgetForm } from '../PasswordForget';
import PasswordChange from '../PasswordChange';

const Account = () => (
    <div>
        <h1>Account Page</h1>
        <PasswordForget />
        <PasswordChange />
    </div>
);

export default Account;