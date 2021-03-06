import React, { Component } from 'react';
import {Route,Router, Link} from 'react-router-dom'
import history from './utils/history'
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar'
import Login from './Login';
import Home from './Home';
class App extends Component {
  constructor(props) {
   super(props);
   this.state = {open: false};
 }

 handleToggle = () => this.setState({open: !this.state.open});
 handleClose = () => this.setState({open: false});

  render() {
    return (



        <Router history= {history}>
        <MuiThemeProvider>

        <AppBar
        onTitleClick={this.handleToggle}
            title="Crypto-Monitor"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={(open) => this.setState({open})}
          >
            <Link onClick={this.handleClose} to="/"><MenuItem>Home</MenuItem></Link>
            <Link onClick={this.handleClose} to="/Login"><MenuItem>Login</MenuItem></Link>
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
