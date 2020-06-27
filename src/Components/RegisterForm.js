import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import MedForm from './MedForm';
import axiosWithAuth from '../utils/axiosWithAuth';

function RegisterForm({ history }) {
  const initialState = {
    email: '',
    password: '',
    first_name:'',
    last_name:'',
    // sleep: false,
    // pain: false,
    // eating: false,
    // cancer: false,
    // glaucoma: false,
    // nausea: false,
    // mental: false,
  }

  const [credentials, setCredentials] = useState(initialState)

  useEffect(() => {
    localStorage.clear()
  }, [])

  const handleChange = e => {
    e.preventDefault()

    setCredentials({ ...credentials, [e.target.name]: e.target.value })

    console.log(credentials)
  }

  const redirectToLogin = () => {
    history.push('/login'); 
};

  const handleSubmit = e => {
    e.preventDefault()

    axiosWithAuth()
        .post('/api/auth/register', credentials)
        .then(response => {
            console.log(response.data);
            localStorage.setItem('token', response.data.payload)
            history.push('/homepage')
        }) 
        .catch(error => {
            console.log(error)
        })

    console.log({ credentials })
  }

  return (
    <div className="register">
      <h1>Med-Cabinet</h1>
      <div className="register-form">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" />
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            value={credentials.first_name}
            onChange={e => handleChange(e)}
            required
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={credentials.last_name}
            onChange={e => handleChange(e)}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={credentials.email}
            onChange={e => handleChange(e)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={e => handleChange(e)}
            minLength='6'
            required
          />
          <MedForm credentials={credentials} handleChange={handleChange} />
          <button type="submit">Register</button>
        </form>
        <div className='redirect'>
            <p>Already have an account?</p>
            <span onClick={() => redirectToLogin()}>Login Here</span>
        </div>
      </div>
    </div>
  )
}

export default withRouter(RegisterForm)

