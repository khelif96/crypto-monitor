import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import AutoComplete from 'material-ui/AutoComplete';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';



const cardStyle = {
  marginTop:50,
  padding:50,
  backgroundColor:"red"
};
class Login extends Component {
  constructor(props){
    super(props);
  }


  render(){

    return(
      <center>
      <Paper style={cardStyle} zDepth={3} >
      <h2>Login</h2>
         <TextField
   floatingLabelText="User Name"/>
   <br/>
   <TextField
      hintText="Password Field"
      floatingLabelText="Password"
      type="password"
    />
    <br/>
    <RaisedButton label="Login" primary={true}/>
    <br/>
    <Link to="/Register">Or Register</Link>
      </Paper>
      </center>
  );
  }
}

export default Login;
