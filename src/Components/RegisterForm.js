import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

function RegisterForm(props) {
    const [state, setState] = useState({
        email:'',
        password:'',
        confirmPassword:'',
        successAlert:''
    })

    const handleChange = (e) => {
        e.preventDefault();
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    console.log(state);

    // const sendLoginToServer = () => {
    //     if(state.email.length && state.password.length) {
    //         props.showError(null);
    //         const payload={
    //             'email': state.email,
    //             'password': state.password,
    //         }
    //     }
    //     axios
    // }

    const redirectToLogin = () => {
        props.updateTitle('Login')
        props.history.push('/login');
    }
    
    const handleSubmit = e => {
        e.preventDefault();

        // if(state.password === confirmPassword) {
        //     sendLoginToServer()
        // } else {
        //     props.showError('Passwords do not match');
        // }
        
    }

    return(
        <div className='register'>
            <h1>Med-Cabinet</h1>
        <div className='register-form'>
            <h2>Register</h2>
            <form>
                <label htmlFor='email' />
                    <input 
                        type='text'
                        id='email'
                        placeholder='Email'
                        value={state.email}
                        onChange={handleChange}
                        required
                    />
                    <input 
                        type='text'
                        id='password'
                        placeholder='Password'
                        value={state.password}
                        onChange={handleChange}
                        required
                    />
                    <input 
                        type='text'
                        id='confirm-password'
                        placeholder='Confirm Password'
                        // value={state.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                    <button type='submit'>Register</button>

                    {/* add onChange once handleSubmit is completed */}
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