import React from 'react';
import './LoginForm.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Loginform() {
  return (
    <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
      <div className="login">
        <h2 className='mb-3'>Login Form</h2>
        <form>
        <div className='form-group' >
          <label htmlFor='email'>Email Address</label>
          <input type='email'></input>
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input type='password'></input>
        </div>
        <div className='form-group'>
          <input type='checkbox'></input>
          <label htmlFor='check'>Remember me</label>
        </div>
        <button className='btn btn-primary'>SIGN IN</button>
        </form>
      </div>
    </div>

  )
}

export default Loginform