import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
// import MedForm from './MedForm';
// import axiosWithAuth from '../utils/axiosWithAuth';

function RegisterForm({ history }) {
  const initialState = {
    email: '',
    password: '',
  }

  const [register, setRegister] = useState(initialState)

  useEffect(() => {
    localStorage.clear()
  }, [])

  const handleChange = e => {
    e.preventDefault()

    setRegister({ ...register, [e.target.name]: e.target.value })

    console.log(register)
  }

  const handleSubmit = e => {
    e.preventDefault()

    console.log({ register })
  }

  return (
    <div className="register">
      <h1>Med-Cabinet</h1>
      <div className="register-form">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={register.email}
            onChange={e => handleChange(e)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={register.password}
            onChange={e => handleChange(e)}
            required
          />
          <button type="submit">Register</button>
        </form>
        <div className="redirect">
          <p>Already have an account?</p>
        </div>
      </div>
    </div>
  )
}

export default withRouter(RegisterForm)

