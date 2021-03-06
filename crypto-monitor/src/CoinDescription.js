import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import TransactionHistoryFeed from './TransactionHistoryFeed';
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
        .catch(error => {
          alert("Axios "+  error)
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
    const transactionData = [{type:'Buy',quantity: 12, price:2, total:24},{type:'Sell',quantity: 10, price:3, total:30},{type:'Buy',quantity: 10, price:2.5, total:25},{type:'Sell',quantity: 10, price:3, total:30}]
    const TransactionTitle = "New " + this.state.coinName + " Transaction";
    // console.log(JSON.stringify(transactionData));
    const cardTextStyle ={
      backgroundColor:'#f1f1f1'
    }
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
      <CardText style={cardTextStyle} expandable={true}>
        <TransactionHistoryFeed transactionData={transactionData}/>
      </CardText>
    </Card>
  );
  }
}

export default CoinDescription;
