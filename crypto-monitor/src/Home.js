import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import AutoComplete from 'material-ui/AutoComplete';
import TextField from 'material-ui/TextField';

import CoinDescription from './CoinDescription';

// import NewTransactionDialog from './NewTransactionDialog'
import {getAllCoins} from './utils/query.js';

const pageStyle = {
  margin:50
};
class Home extends Component {
  constructor(props){
    super(props);
    this.state = {coinName: this.props.coinName,BTC: 0,USD: 0, open:false , cryptos: ['BTC','LTC','ETH', 'XRP','REQ']}
    this.generateCryptoDescriptions();
  }
displayedCryptos = []

generateCryptoDescriptions = () => {
  for (var crypto in this.state.cryptos) {
    this.displayedCryptos.push(<CoinDescription coinName={this.state.cryptos[crypto]}/>);
  }
}
  handleOpen = () => {
   this.setState({open: true});
 };

 handleClose = () => {
   this.setState({open: false});
 };

  priceString(){
    const price = this.state.USD;
    return "Price: $ " + price
  }

  render(){

    return(
<div style={pageStyle}>
{this.displayedCryptos}
<FlatButton label="Track New" fullWidth={true}/>
</div>
  );
  }
}

export default Home;
