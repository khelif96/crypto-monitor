import React, {Component} from 'react';

import TransactionHistoryField from './TransactionHistoryField';
class TransactionHistoryFeed extends Component{
  constructor(props){
    super(props);
    this.state = {transactionFeed:[]}
    this.parsePaper = this.parsePaper.bind(this);
    this.createTransactionHistoryField = this.createTransactionHistoryField.bind(this);
  }

  componentDidMount(){
    // console.log("PROPS " + JSON.stringify(this.props.transactionData))

    this.parsePaper(this.props.transactionData);

  }

  createTransactionHistoryField(transactionData,transaction){
    // alert("Creating history field");
    return (<TransactionHistoryField key={transaction} price={transactionData.price} quantity={transactionData.quantity} total={transactionData.total} type={transactionData.type}/>)
  }
  parsePaper(transactionData){
    // alert("Parsing Paper " + JSON.stringify(transactionData));
    var tempTransactionFeed = []
    for (var transaction in transactionData) {
      // transaction = transactionData[transaction];
      // alert(JSON.stringify(transaction))
      tempTransactionFeed.push(this.createTransactionHistoryField(transactionData[transaction],transaction));
    }
    // alert("END LENGTH " + JSON.stringify(tempTransactionFeed));

    this.setState({transactionFeed:tempTransactionFeed});
  }

  render(){
    const transactionData = {type:'Buy',quantity: 12, price:2, total:24};

    // alert("FEED SIZE " + this.state.transactionFeed.length);
    return(
      <div>
      <b>Transactions</b>
      {this.state.transactionFeed}</div>
    )
  }
}

export default TransactionHistoryFeed;
