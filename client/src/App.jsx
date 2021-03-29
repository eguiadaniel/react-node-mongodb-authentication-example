import React, { Component } from 'react'

import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import Home from './views/Home';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
import Private from './views/Private';


class App extends Component {

  state= {
    user: null
  }

  handleUSerChange = (user) => {
    this.setState({
      user: user
    })
  }

  render() {
    return (
      <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/sign-in">Sign In</Link>
        <Link to="/sign-up">Sign Up</Link>
        {this.state.user &&         
        <span>Welcome {this.state.user.name}</span>
        }
      </nav>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/sign-up" component={SignUp} exact/>
          <Route path="/sign-in" exact render={ (props) => <SignIn {...props} onUserChange={(user) => this.handleUSerChange(user)} ></SignIn> }/>
          <Route path="/private" component={Private} exact/>
        </Switch>
      </BrowserRouter>

    )
  }
}

export default App;
