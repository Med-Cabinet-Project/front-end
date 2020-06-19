import React , {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import '../index.css';

//components
import Header from './Header'
import RegisterForm from './RegisterForm';
import Login from './Login';
import Home from './Home';


function App() {
  const [title, updateTitle] = useState(null);
  return (
    <Router>
      <div className="App">
      
       <div>
          <div className='nav'>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
          </div>
          <Header title={title} />
          <Switch>
          {/* <Route path="/" exact={true}>
              <RegisterForm updateTitle={updateTitle} />
            </Route> */}
            <Route path="/register">
              <RegisterForm updateTitle={updateTitle} />
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
