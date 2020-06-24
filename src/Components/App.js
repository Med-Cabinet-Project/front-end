import React , {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import '../index.scss';

//components
import RegisterForm from './RegisterForm';
import Login from './Login';
import Home from './Home';


function App() {
  
  return (
    <Router>
      
      <div className="App">
      
       <div className='form-links'>

          <div className='nav'>
              <Link to='/' className='link'>Home</Link>
              <Link to='/login' className='link'>Login</Link>
              <Link to='/register' className='link'>Register</Link>
          </div>


          
          <Switch>

            <Route path="/register">
              <RegisterForm  />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/">
              <Home />
            </Route>

          </Switch>
          

        </div>
      </div>
    </Router>
  );
}

export default App;
