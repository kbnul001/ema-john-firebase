import "./Login.css";

import React from 'react';
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="login-form">
            <div>
                <form onSubmit="">
                    <h2>Please Login</h2>
                    <input type="email" name="" id="" placeholder="Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Password" />
                    <br />
                    <input type="submit" value="Submit" />
                    <div>-------or-------</div>
                    <button className="btn-regular">Sign in with Google</button>
                    <p>New User? <Link to="/register">Create an account</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;