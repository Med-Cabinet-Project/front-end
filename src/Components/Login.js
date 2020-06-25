import React from 'react';
import { withRouter } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

class Login extends React.Component {
   state ={
       credentials: {
        email:'',
        password:'',
       }
    }

    componentDidMount() {
        localStorage.clear();
    };

    redirectToRegister = () => {
        this.props.history.push('/register'); 
    };

    handleSubmit = e => {
        e.preventDefault();

        axiosWithAuth()
        .post('/api/auth/login', this.state.credentials)
        .then(response => {
            console.log(response.data);
            localStorage.setItem('token', response.data.payload);

            this.props.history.push('/protected');
        })
        .catch(error => {
            console.log(error);
        });
    };
    
    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
        
        console.log(this.state.credentials);
    };

    render(){
        return(
            <div className='login'>
                <h1>Med-Cabinet</h1>
                    <div className='login-form'>
                        <h2>Login</h2>
                            <form onSubmit={this.handleSubmit}>
                                <label htmlFor='email' />
                                    <input 
                                        type='text'
                                        name='email'
                                        placeholder='Email'
                                        value={this.state.credentials.email}
                                        onChange={this.handleChange}
                                        required
                                    />
                                    <input 
                                        type='password'
                                        name='password'
                                        placeholder='Password'
                                        value={this.state.credentials.password}
                                        onChange={this.handleChange}
                                        required
                                    />
                                    <button type='submit' >Sign In</button>
                            </form>

                        <div className='redirect'>
                            <p>Don't have an account?</p>
                            <span onClick={() => this.redirectToRegister()}>Register Here</span>
                        </div>
                    </div>
            </div>
        );
    
    }
};

export default withRouter(Login);