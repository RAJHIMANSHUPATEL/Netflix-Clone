import React, { useState } from 'react'
import './LoginScreen.css'
import SignupScreen from './SignupScreen';

function LoginScreen() {
    const [signIn, setSignIn] = useState(false);
    
    
    return (
        <div className='loginScreen'>
            <div className="loginScreen__background">
                <img className='loginScreen__logo' src="https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png" alt="" />
                <button
                    onClick={() => setSignIn(true)}
                    className='loginScreen__button'>
                    Sign In
                </button>
                <div className="loginScreen__gradient">Herllo</div>
                <div className="loginScreen__body">
                    {signIn ? (
                        <SignupScreen />
                    ) : (

                        <>
                            <h1>Unlimited films, TV programmes and more.</h1>
                            <h2>Start at ₹149. Cancel at anytime.</h2>
                            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                            <div className="loginScreen__input">
                                <form>
                                    <input type="email" placeholder='Email address' />
                                    <button
                                        onClick={() => setSignIn(true)}
                                        className='loginScreen__getStarted'>Get Started</button>
                                </form>
                            </div>
                        </>
                    )
                    }
                </div>
            </div>
        </div>
    )
}

export default LoginScreen