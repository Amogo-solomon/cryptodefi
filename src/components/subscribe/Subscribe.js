import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
  return (
    <div className='subscribe'>
        <div className='content'>
            <h2>Join Our Defi Community</h2>
            <form action="https://getform.io/f/bdf08e2d-8041-4014-84bb-290c6e2c8f9d" method="POST">
                <div className="form-container display-col">
                    <input type="email" name='email' placeholder='Enter our email' />
                    <button className="btn">Sign Up</button>
                </div>
                <div className="form-container">
                    <input type="checkbox"/> <p>Yes, I agree to receive email communications from DeFI.</p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Subscribe