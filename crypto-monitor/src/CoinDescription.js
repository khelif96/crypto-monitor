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
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        pri
        mary={true}
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
        <Dialog
          title={TransactionTitle}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}

        >
        <NewTransactionDialog coinName={this.state.coinName}/>
        </Dialog>
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
