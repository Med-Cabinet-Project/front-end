import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


//components
import Header from './Header'
import RegisterForm from './RegisterForm';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
       <div>
          <Switch>
            <Route exact path='/'>
              <RegisterForm />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
