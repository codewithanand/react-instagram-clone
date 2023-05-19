import React from 'react'
import { Link } from 'react-router-dom'
import './register.scss'

const Register = () => {
  return (
    <div className='register'>
        <div className="registerContainer">
            <h1>Instagram</h1>
            <input type="text" placeholder='Phone number or email' />
            <input type="text" placeholder='Full Name' />
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='Password' />
            <button>Sign up</button>
            <div className="separator">
                <div></div> OR <div></div>
            </div>
            <div className="facebookBtn">Login with Facebook</div>
        </div>
        <div className="loginContainer">
            <p>Do you have an account? <Link to="/login">Log in</Link></p>
        </div>
    </div>
  )
}

export default Register