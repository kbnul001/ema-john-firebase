import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className="login-form">
                <form onSubmit="">
                    <h2>Please Register</h2>
                    <input type="email" name="" id="" placeholder="Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Password" />
                    <br />
                    <input type="password" name="" id="" placeholder="Re-enter Password" />
                    <br />
                    <input type="submit" value="Submit" />
                    <div>-------or-------</div>
                    <button className="btn-regular">Sign in with Google</button>
                    <p>Already a user? <Link to="/login">Sign in</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;