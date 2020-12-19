import React from 'react';
import {Link} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import SignOutButton from './components/Auth/SignOut';
import { AuthUserContext } from './components/Session';
const Navigation = () => (
<div>
    <AuthUserContext.Consumer>
    {authUser =>
    authUser? <NavigationAuth/> :<NavigationNonAuth/>}
    </AuthUserContext.Consumer>
</div>
);
const NavigationAuth = () => (
    <div>
        <ul>
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
const NavigationNonAuth = () => (
    <ul>
            <li>
                <Link to={ROUTES.LANDING}>LANDING</Link>
            </li>
            <li>
                <Link to={ROUTES.SIGN_IN}>Sign In</Link>
            </li>
          
    </ul>
)
export default Navigation;
