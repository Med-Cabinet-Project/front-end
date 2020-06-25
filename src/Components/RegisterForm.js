import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MedForm from './MedForm';
import axiosWithAuth from '../utils/axiosWithAuth';

class RegisterForm extends Component {
    state= {
        credentials: {
            email:'',
            password:'',
            // confirmPassword:'',
            successAlert:''
        }
    };
    
    componentDidMount() {
        localStorage.clear();
    };

    handleChange = e => {
        e.preventDefault();
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.credentials.email);
    };

    // const sendLoginToServer = () => {
    //     if(state.email.length && state.password.length) {
    //         // props.showError(null);
    //         const payload={
    //             'email': state.email,
    //             'password': state.password,
    //         }
        
    //     axiosWithAuth()
    //     .post('api/auth/register', payload)
    //     .then(response => {
    //         console.log(response.data);
    //         localStorage.setItem('token', response.data.payload)
    //         this.props.history.push('/protected')
    //     }) 
    //     .catch(error => {
    //         console.log(error)
    //     });
    //     }
    // };

    redirectToLogin = () => {
        // props.updateTitle('Login')
        this.props.history.push('/login');
    };
    
    handleSubmit = e => {
        // e.preventDefault();

        axiosWithAuth()
        .post('api/auth/register', this.state.credentials)
        .then(response => {
            console.log(response.data);
            localStorage.setItem('token', response.data.payload)
            this.props.history.push('/protected')
        }) 
        .catch(error => {
            console.log(error)
        })
    };

    render() {
        return(
            <div className='register'>
                <h1>Med-Cabinet</h1>
            <div className='register-form'>
                <h2>Register</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='email' />
                        <input 
                            type='text'
                            id='email'
                            placeholder='Email'
                            // value={this.state.credentials.email}
                            onChange={this.handleChange}
                            required
                        />
                        <input 
                            type='text'
                            id='password'
                            placeholder='Password'
                            // value={this.state.credentials.password}
                            onChange={this.handleChange}
                            required
                        />
                        {/* <input 
                            type='text'
                            id='confirm-password'
                            placeholder='Confirm Password'
                            // value={state.confirmPassword}
                            onChange={handleChange}
                            required
                        /> */}
                        <MedForm />
                        {/* <button type='submit'>Register</button>  */}
                </form>
                <div className='redirect'> 
                    <p>Already have an account?</p>
                    <span onClick={() => this.redirectToLogin()}>Login Here</span>
                </div>
            </div>
            </div>
        );
    }
};

export default withRouter(RegisterForm);