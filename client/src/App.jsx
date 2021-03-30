import React, { Component } from 'react'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import { signOut, verify } from './services/api';

import Home from './views/Home';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
import Private from './views/Private';
import ProtectedRoute from './components/ProtectedRoute'



class App extends Component {

  state= {
    user: null,
    loaded: false
  }

  async componentDidMount() {
    const user = await verify();
    this.setState({
      user: user,
      loaded: true
    })
  }

  handleUSerChange = (user) => {
    this.setState({
      user: user
    })
  }

  handleSignOut = async () => {
    await signOut();
    this.setState({
      user: null
    })
    }  

  render() {
    const user = this.state.user
    return (
      <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>        
        {this.state.user && (
        <>
        <span>Welcome {this.state.user.name}</span>
        <Link to="/private">Private</Link>
        <button onClick={this.handleSignOut}>Sign Out</button>
        </> 
        ) || (<>
        <Link to="/sign-in">Sign In</Link>
        <Link to="/sign-up">Sign Up</Link>
        </>
        )         
        }
      </nav>
      {this.state.loaded && (
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/sign-in" exact render={ (props) => <SignIn {...props} onUserChange={(user) => this.handleUSerChange(user)} ></SignIn> }/>
          <Route path="/sign-up" exact render={ (props) => <SignUp {...props} onUserChange={(user) => this.handleUSerChange(user)} ></SignUp> }/>
          {/* <Route path="/private" component={Private} user={user} exact/> */}
          <ProtectedRoute 
            authorized = {this.state.user}
            redirect = "/sign-in"
            path="/private" 
            exact 
            render={(props) => <Private {...props} 
            user={user}/> }
          />
        </Switch>
      )}
      </BrowserRouter>

    )
  }
}

export default App;
