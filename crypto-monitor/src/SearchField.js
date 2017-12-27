import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import AutoComplete from 'material-ui/AutoComplete';

// import NewTransactionDialog from './NewTransactionDialog'
import {getAllCoins} from './utils/query.js';

const style = {
  margin:12
};
class SearchField extends Component {
  constructor(props){
    super(props);
    this.state = {coinName: this.props.coinName,BTC: 0,USD: 0, open:false , cryptos: ['btc','ltc']}
    this.getAllCoins();
  }

  getAllCoins(){
    getAllCoins()
      .then(response => {
        alert(JSON.stringify(response));
          var cryptosArray = []
          var i = 0;
          for (var coin in response.Data) {
            // alert(JSON.stringify(response.Data[coin].FullName));
              // alert("PUSHED");
              cryptosArray.push(response.Data[coin].FullName);
              if(i === 1000){
                break;
              }
              i++;
          }
          this.setState({cryptos: cryptosArray})
          }
          // alert(JSON.stringify(response), response.BTC.USD)
        )
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
      <div>
      <h3>Add A Coin</h3>
      <AutoComplete
      hintText="Search For A Coin"
      filter={AutoComplete.caseInsensitiveFilter}
      dataSource={this.state.cryptos}
      openOnFocus={true}
      maxSearchResults={10}
      floatingLabelText="Search For A Coin"

      />
      </div>
  );
  }
}

export default SearchField;
