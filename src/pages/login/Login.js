import React, { useContext } from 'react'
import './login.scss'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="login">
            <div className="loginContainer">
                <h1>Instagram</h1>
                <input type="text" placeholder='Phone number, username or email' />
                <input type="password" placeholder='Password' />
                <button>Login</button>
                <div className="separator">
                    <div></div> OR <div></div>
                </div>
                <div className="facebookBtn">Login with Facebook</div>
                <Link to="/forgot" className='forgotPass'>Forgot password?</Link>
            </div>
            <div className="signupContainer">
                <p>Don't  have an account? <Link to="/register">Sign up</Link></p>
            </div>
        </div>
    )
}

export default Login