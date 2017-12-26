import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';


// import {getCoin} from './utils/query.js';

const style = {
  margin:12
};
class NewTransactionDialog extends Component {
  constructor(props){
    super(props);
    this.state = {coinName: this.props.coinName,BTC: 0,USD: 0, open:false}
    // this.getCoin(this.state.coinName);
  }

  handleClose = () => {
    this.setState({open: false});
  };



  priceString(){
    const price = this.state.USD;
    return "Price: $ " + price
  }

  render(){
    return(

      <div>
      <TextField
      hintText="Amount Bought"
      floatingLabelText="Amount Bought"/>
    <br/>
    <TextField
    hintText="Price Per Coin"
    floatingLabelText="Price Per Coin"/>
    <TextField
    hintText="Amount"
    floatingLabelText="Transaction Amount"/>
    <TextField
    hintText="Amount"
    floatingLabelText="Transaction Amount"/>
    </div>

  );
  }
}

export default NewTransactionDialog;
