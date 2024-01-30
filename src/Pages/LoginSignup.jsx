import React from 'react'
import './css/LoginSignup.css'

function LoginSignup() {
  return (
    <div className='loginsingnup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className="loginsingup-fields">
          <input type="text" placeholder='Enter Your Name' />
          <input type="email" placeholder='Enter Email Address' />
          <input type="password" placeholder='Enter Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already have an account? <span>Login Here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing I agree to the terms od use & privacy policy</p>
        </div>
      </div>  
    </div>
  )
}

export default LoginSignup