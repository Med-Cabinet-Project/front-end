import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function RegisterForm(props) {
    const [state, setState] = useState({
        email:'',
        password:'',
        confirmPassword:'',
        successAlert:''
    })

    const handleChange = e => {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const redirectToLogin = () => {
        props.updateTitle('Login')
        props.history.push('/home');
    }
    
    const handleSubmit = e => {
        e.preventDefault();

    }

    return(
        <div>
            <form>
                <label htmlFor='email' />
                    <input 
                        type='text'
                        id='email'
                        placeholder='Email'
                        value={state.email}
                    />
                    <input 
                        type='password'
                        id='password'
                        placeholder='Password'
                        value={state.password}
                    />
                    <input 
                        type='password'
                        id='password'
                        placeholder='Confirm Password'
                        value={state.confirmPassword}
                    />
                    <button>Register</button>
            </form>
            <div>
                <p>Already have an account?</p>
                <span onClick={() => redirectToLogin()}>Login Here</span>
            </div>
        </div>
    );
};

export default RegisterForm;