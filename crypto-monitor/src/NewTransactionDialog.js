import React, {Component} from 'react';

import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';





class NewTransactionDialog extends Dialog {
  constructor(props){
    super(props);
    this.state = {coinName: this.props.coinName,
      BTC: 0,
      USD: 0,
      open:this.props.open,
      amountBought: null,pricePerCoin:null,transactionTotal:0,transactionDate: new Date()
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleDateUpdate = this.handleDateUpdate.bind(this);
    this.handleClose = this.handleClose.bind(this);
    // this.getCoin(this.state.coinName);
  }

  handleChange(event) {
    console.error("ERRROR "+ event.target.id + " value: " + event.target.value);
    this.setState(
      {[event.target.id]: event.target.value}
    );


  }
  handleDateUpdate(empty, date){
    this.setState({
      transactionDate : date
    })
  }
  handleClose = () => {
    console.log("Handle Close");
    this.setState({open: false});
  };

  validateForm() {
     return this.state.amountBought !== null && this.state.pricePerCoin !== null ;
   }


  priceString(){
    const price = this.state.USD;
    return "Price: $ " + price
  }

  render(){
    const TransactionTitle = "New " + this.state.coinName + " Transaction";

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

    return(
      <Dialog
        title={TransactionTitle}
        actions={actions}
        modal={false}
        open={this.props.open || this.state.open}
        onRequestClose={this.handleClose}>
        <div>
          <TextField
          floatingLabelText="Amount Bought" fullWidth={true} underlineShow={false} onChange={this.handleChange} id="amountBought" value={this.state.amountBought}/>
          <Divider/>
          <TextField
          floatingLabelText="Price Per Coin" fullWidth={true} underlineShow={false} onChange={this.handleChange} id="pricePerCoin" value={this.state.pricePerCoin}/>
          <Divider/>
          <TextField
          floatingLabelText="Transaction Total" fullWidth={true} underlineShow={false} onChange={this.handleChange} id="transactionTotal" value={this.state.amountBought*this.state.pricePerCoin}/>
          <Divider/>
          <DatePicker floatingLabelText="Transaction Date" fullWidth={true} underlineShow={false} onChange={this.handleDateUpdate} id="transactionDate" value={this.state.transactionDate}/>
          <Divider/>
          <TimePicker floatingLabelText="Transaction Time" fullWidth={true} underlineShow={false} onChange={this.handleDateUpdate} id="transactionDate" value={this.state.transactionDate}/>
          <Divider/>
        </div>
      </Dialog>
  );
  }
}

export default NewTransactionDialog;
