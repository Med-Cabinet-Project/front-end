import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import Header from './Header';

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
        <div>
            <form>
                <label htmlFor='email' />
                    <input 
                        type='text'
                        id='email'
                        placeholder='Email'
                        value={state.email}
                        onChange={handleChange}
                    />
                    <input 
                        type='password'
                        id='password'
                        placeholder='Password'
                        valye={state.password}
                        onChange={handleChange}
                    />
                    <button type='submit'>Sign In</button>
                    {/* add onChange once handleSubmit is completed */}
            </form>
            <div>
                <p>Don't have an account?</p>
                <span onClick={() => redirectToRegister()}>Register Here</span>
            </div>
        </div>
    );

};

export default withRouter(Login);