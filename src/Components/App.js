import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import '../index.scss';

//components
import RegisterForm from './RegisterForm';
import Login from './Login';
import Home from './Home';
import HomePage from './HomePage/Homepage';
import UserProfile from '../Components/Profile/ProfileInfo'
import { PrivateRoute } from './PrivateRoute';



function App() {
  
  return (
    <Router>
      <div className="App">
        <div className='form-links'>
          <div className='nav'>
            <Link to='/' className='link'>Home</Link>
            <Link to='/register' className='link'>Register</Link>
            <Link to='/login' className='link'>Login</Link>
            <Link to='/homepage' className='link'>Recs</Link>
            <Link to='/profile' className='link'>Profile</Link>
          </div>

          <Switch>
            <Route path='/profile' component={UserProfile} />
            <Route path='/homepage' component={HomePage} />
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
