import React from 'react';
import {Link} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import SignOutButton from './components/Auth/SignOut';

const Nagivation = () => (
    <div>
        <ul>
            <li>
                <Link to={ROUTES.SIGN_IN}>Sign In</Link>
            </li>
            <li>
                <Link to={ROUTES.LANDING}>LANDING</Link>
            </li>
            <li>
                <Link to={ROUTES.HOME}>HOME</Link>
            </li>
            <li>
                <Link to={ROUTES.ACCOUNT}>ACCOUNT</Link>
            </li>
            <li>
                <Link to={ROUTES.ADMIN}>ADMIN</Link>
            </li>
            <li>
                <SignOutButton/>
            </li>
        </ul>
    </div>
);

export default Nagivation;
