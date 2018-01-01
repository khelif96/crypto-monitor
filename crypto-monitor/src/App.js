import React, { Component } from 'react';
import {Route,Router, Link} from 'react-router-dom'
import history from './utils/history'
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar'
import CoinDescription from './CoinDescription.js';
import SearchField from './SearchField.js';
import Login from './Login';
import Home from './Home';
class App extends Component {
  constructor(props) {
   super(props);
   this.state = {open: false};
 }

 handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (



        <Router history= {history}>
        <MuiThemeProvider>

        <AppBar
        onTitleClick={this.handleToggle}
            title="Crypto-Monitor"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <Drawer open={this.state.open}>
            <Link to="/"><MenuItem>Home</MenuItem></Link>
            <Link to="/Login"><MenuItem>Login</MenuItem></Link>
          </Drawer>

        <Route exact path = "/" component = {Home}/>

          <Route exact path = "/Login" component = {
           (routeProps) => <Login/>}/>
          </MuiThemeProvider>

        </Router>



    );
  }
}

export default App;
