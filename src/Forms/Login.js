import React from "react";
import "../style.css";
import { Link, Redirect, Route, Switch, BrowserRouter as Router} from "react-router-dom";

import {Logins} from "./../Const/Logins";
import Registration from "./../Forms/Registration";
import Input from "./../Forms/Input";

const array = Logins;

class Login extends React.Component {
  
  constructor(props){
    super(props);
    var logins = Logins;
    this.state = {
      login:"",
      password:"",
      logger: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }  

  onChange(idData,dataInput) {
    this.setState({[idData]: dataInput})
  }
  onSubmit(e){
    e.preventDefault();
    for(let i = 0; i < Logins.length; i ++){
      if(this.state.login === Logins[i].login && 
      this.state.password === Logins[i].password){
        console.log(this.state.logger);
        this.setState({logger: true});
        console.log(this.state.logger);
    }
      else {
        console.log("false");
      }
    }
  }
  
  render() {   
    const{login, password, logger} = this.state;
    const data = [
      [login,"login"],[password, "password"]
    ];

    if(!logger){
    return (
      <div>     
      <form onSubmit={this.onSubmit}>
      <h2>Login :</h2>
        {data.map( (item, index) => {
          return <Input elem = {item} key = {index} onChange = {this.onChange}  />
        })}
        <button>SEND</button>
      </form>
    
      </div>
    );
    } else{
      return <Redirect from="/login" to="/registration" />
    }
  }
  componentDidUpdate(){
    console.log(this.state)
  }
}

export default Login;
