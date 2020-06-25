import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import '../index.scss';

//components
import RegisterForm from './RegisterForm';
import Login from './Login';
import Home from './Home';
import HomePage from './Homepage';
import { PrivateRoute } from './PrivateRoute';
// import MedForm from './MedForm';


function App() {
  
  return (
    <Router>
      <div className="App">
        <div className='form-links'>
          <div className='nav'>
            <Link to='/' className='link'>Home</Link>
            <Link to='/login' className='link'>Login</Link>
            <Link to='/register' className='link'>Register</Link>
            <Link to='/protected' className='link'>Welcome</Link>
          </div>

          <Switch>
            <Route path='/protected' component={HomePage} />
            <Route path='/register' component={RegisterForm} />
            <Route path='/login' component={Login} />
            <Route path='/' component={Home} />
          </Switch>

        </div>
      </div>
    </Router>
  );
}

export default App;
