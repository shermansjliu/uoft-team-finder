import React from 'react'
// Importing react-router-dom to use the React Router
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css'

import Setting from './components/Setting';
import RealHome from './components/RealHome/RealHome';
import Home from './components/Home';
import Login from './components/Login/Login';
import Team from './components/team_view/Team';


class App extends React.Component {

  state = {
    userName: "",
    userPassword: ""
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
          <Route exact path='/' render={() => 
                            (<Login appState={this.state}/>)}/>
            <Route exact path='/RealHome' render={() => 
                            (<RealHome appState={this.state}/>)}/>
            <Route exact path='/Home' render={() => 
                            (<Home appState={this.state}/>)}/>
            <Route exact path='/setting' render={() => 
                            (<Setting appState={this.state}/>)}/>
            <Route exact path='/Team' render={() => 
                            (<Team appState={this.state}/>)}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
