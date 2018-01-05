import React, {Component} from 'react';
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'

class TransactionHistoryField extends Component{
  constructor(props){
    super(props);
    this.state = {quantity:0,type:'', price:0,total:0}
    // alert("Creating transaction history field with " + JSON.stringify(props) + "\n" + props.price);


  }

  componetDidMount(){
    if(this.props.type === 'Buy'){
      this.setState({type:'Buy',quantity: this.props.quantity,price:this.props.price, total:this.props.total},this.acknowledge());

    }else if(this.props.type === 'Sell'){
      this.setState({type:'Sell',quantity: this.props.quantity,price:this.props.price, total:this.props.total},this.acknowledge());

    }
  }
  acknowledge(){
    // alert("acknowledged state change" + this.state.type);
    console.log("State Changed acknowledged");
  }
  parseTransaction(transactionData){
    if(this.props.type === 'Buy'){
      this.setState({type:'Buy'})
    }else if(this.props.type === 'Sell'){
      this.setState({type:'Sell'})
    }
    this.setState({quantity: this.props.quantity,price:this.props.price, total:this.props.total});

  }

  render(){
    // alert("REDNERIN");
    const style = {
      width:500
    }
    const buyStyle = {
      marginTop:15,
      color:'green'
    }
    const sellStyle = {
      marginTop:15,

      color:'red'
    }
    var PaperStyle = {color:'black'};
    if(this.props.type === 'Buy'){
        PaperStyle = buyStyle;
    }else{
      PaperStyle = sellStyle;
    }
    return(
      <Paper style={PaperStyle}>
      {this.props.type}
      <Divider inset={true}/>
      Quantity:{this.props.quantity} BTC
      <Divider inset={true}/>
      ${this.props.price}
      </Paper>

    )
  }
}

export default TransactionHistoryField;
