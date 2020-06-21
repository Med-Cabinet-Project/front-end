import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

function Login(props) {
    const[state, setState] = useState({
        email:'',
        password:'',
        successAlert:''
    })

    const handleChange = (e) => {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();

        
    }
    // const redirectToHome = () => {
    //     props.updateTitle('Home')
    //     props.history.push('/home')
    // }

    const redirectToRegister = () => {
        props.history.push('/register'); 
        props.updateTitle('Register');
    }

    return(
        <div className='login'>
            <h1>Med-Cabinet</h1>
        <div className='login-form'>
            <h2>Login</h2>
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
                        type='password'
                        id='password'
                        placeholder='Password'
                        value={state.password}
                        onChange={handleChange}
                        required
                    />
                    <button type='submit' >Sign In</button>
                    {/* add onChange once handleSubmit is completed */}
            </form>
            <div className='redirect'>
                <p>Don't have an account?</p>
                <span onClick={() => redirectToRegister()}>Register Here</span>
            </div>
            </div>
        </div>
    );

};

export default withRouter(Login);