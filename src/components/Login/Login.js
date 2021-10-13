import "./Login.css";

import React from 'react';
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
    const { signinUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/shop';

    const handleSigninUsingGoogle = () => {
        signinUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })
    }

    return (
        <div className="login-form">
            <div>
                <h2>Please Login</h2>
                <input type="email" name="" id="" placeholder="Email" />
                <br />
                <input type="password" name="" id="" placeholder="Password" />
                <br />
                <input type="submit" value="Submit" />
                <div>-------or-------</div>
                <button onClick={handleSigninUsingGoogle} className="btn-regular">Sign in with Google</button>
                <p>New User? <Link to="/register">Create an account</Link></p>
            </div>
        </div>
    );
};

export default Login;