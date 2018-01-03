import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

import NewTransactionDialog from './NewTransactionDialog'
import {getCoin} from './utils/query.js';

const style = {
  margin:12
};
class CoinDescription extends Component {
  constructor(props){
    super(props);
    this.state = {coinName: this.props.coinName,BTC: 0,USD: 0, open:false}
    this.getCoin(this.state.coinName);
    this.handleClose = this.handleClose.bind(this);
  }

  getCoin(coinName){
    getCoin(coinName)
      .then(response => {
        this.setState({
          USD : response[coinName].USD,
          BTC: response[coinName].BTC
        });
          // alert(JSON.stringify(response), response.BTC.USD)
        })
  }

  handleOpen = () => {
    console.log("State Change");
   this.setState({open: true});
   console.log("State " + this.state.open);

 };

 handleClose = (e) => {
  //  e.preventDefault()
   console.log("Handling CLose");
   this.setState({open: false});
 };


  priceString(){
    const price = this.state.USD;
    return "Price: $ " + price
  }

  render(){
    console.log("RERENDERED");
    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onClick={this.handleClose}
      />,
      <RaisedButton
        label="Submit"
        primary={true}
        disabled={true}
        onClick={this.handleClose}
      />,
    ];
    const TransactionTitle = "New " + this.state.coinName + " Transaction";
    return(
      <Card style={{margin:'20px'}}>
      <CardHeader
        title={this.state.coinName}
        subtitle={this.priceString()}
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardActions>
        <RaisedButton label="Add Transaction" onClick={this.handleOpen} primary={true}/>

        <NewTransactionDialog closeHandler={this.handleClose} open={this.state.open} coinName={this.state.coinName}/>
        <FlatButton label="Stop Tracking" secondary={true} style={style}/>
      </CardActions>
      <CardText expandable={true}>
        <div style={{backgroundColor:"red"}}>Te</div>
      </CardText>
    </Card>
  );
  }
}

export default CoinDescription;
