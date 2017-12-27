import React, { Component } from 'react';

import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar'
import CoinDescription from './CoinDescription.js';
import SearchField from './SearchField.js'
class App extends Component {
  constructor(props) {
   super(props);
   this.state = {open: false};
 }

 handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <MuiThemeProvider>

      <AppBar
      onTitleClick={this.handleToggle}
          title="Crypto-Monitor"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <center>
        <SearchField/>
        </center>

       <CoinDescription coinName="BTC"/>
       <CoinDescription coinName="ETH"/>
       <CoinDescription coinName="XVG"/>
       <CoinDescription coinName="XRP"/>
       <CoinDescription coinName="LTC"/>


       <Drawer open={this.state.open}>
         <MenuItem>Menu Item</MenuItem>
         <MenuItem>Menu Item 2</MenuItem>
       </Drawer>
      </MuiThemeProvider>
    );
  }
}

export default App;
