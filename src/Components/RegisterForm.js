import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import MedForm from './MedForm';
import axiosWithAuth from '../utils/axiosWithAuth';

function RegisterForm({history}) {
    const inititalState= {
        credentials: {
            email:'',
            password:''
        },
        medical: {},
        effects:{}
    };

    const [register, setRegister] = useState(inititalState);
    
    useEffect(()=> {
        localStorage.clear();
    },[]); 

    const handleChange = e => {
        e.preventDefault();
        const {name,value}=e.target
        setRegister({...register, credentials:{[name]:value}})
        console.log(register);
    };

    const redirectToLogin = () => {
        // props.updateTitle('Login')
        history.push('/login');
    };
    
    const handleSubmit = e => {
        e.preventDefault();

        console.log(register)
        // axiosWithAuth()
        // .post('api/auth/register', register)
        // .then(response => {
        //     console.log(response.data);
        //     localStorage.setItem('token', response.data.payload)
        //     history.push('/protected')
        // }) 
        // .catch(error => {
        //     console.log(error)
        // })
    };

        return(
            <div className='register'>
                <h1>Med-Cabinet</h1>
            <div className='register-form'>
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='email' />
                        <input 
                            type='email'
                            id='email'
                            placeholder='Email'
                            value={register.credentials.email}
                            onChange={handleChange}
                            required
                        />
                        <input 
                            type='password'
                            id='password'
                            placeholder='Password'
                            value={register.credentials.password}
                            onChange={handleChange}
                            required
                        />
                        <button type='submit'>Register</button>
                        {/* <MedForm register={register} /> */}
                        
                </form>
                <div className='redirect'> 
                    <p>Already have an account?</p>
                    <span onClick={() => redirectToLogin()}>Login Here</span>
                </div>
            </div>
            </div>
        );
};

export default withRouter(RegisterForm);