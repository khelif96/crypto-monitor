import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import AutoComplete from 'material-ui/AutoComplete';
import TextField from 'material-ui/TextField';



const cardStyle = {
  margin:200,
  padding:50
};
class Login extends Component {
  constructor(props){
    super(props);
  }


  render(){

    return(
      <center>
      <Card style={cardStyle}>
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
      </Card>
      </center>
  );
  }
}

export default Login;
