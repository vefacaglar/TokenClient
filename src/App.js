import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Home from './pages/home'
import Vehicles from './pages/vehicles'
import Login from './pages/login'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/vehicles">Vehicles</Link>
            </li>
            <li>
              <a href="https://localhost:44300/api/token/auth">Login</a>
            </li>
          </ul>
        </div>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/vehicles" component={Vehicles} />
            <Route path="/login/:token" component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;