import React from "react";
import "../style.css";
import { Link, Redirect, Route, Switch, BrowserRouter as Router} from "react-router-dom";
import ReactDOM from "react-dom";

import Logins from "./../Const/Logins";
import Input from "./../Forms/Input";

class Login extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      login:"",
      password:"",
      logger: false,
      loader: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handlerValid = this.handlerValid.bind(this);
  }  

  onChange(idData,dataInput) {
    this.setState({[idData]: dataInput})
  }

  handlerValid(elem){
    var style = "red"
    Logins.map(item => {
      if(item.login === elem){
           style = "green";
           console.log("Log " + item.login + " " + style);
      } else if(item.password === elem){
      style = "green";  
      console.log("Pass " + item.password + " " + style);
      }
    });
    style = style;
    console.log("End handler " + style);
    return {borderColor: style};
  }

  onSubmit(e){
    e.preventDefault();
    this.setState({loader: true});
    if(login.length !== 0){
    for(let i = 0; i < Logins.length; i ++){
      if(this.state.login === Logins[i].login && 
      this.state.password === Logins[i].password){
        this.setState({logger: true});
    }
      else {
        console.log("false");
      }
    }
    } else{
      for(let i = 0; i < logins.length; i ++){
      if(this.state.login === logins[i].login && 
      this.state.password === logins[i].password){
        this.setState({logger: true});
    }
      else {
        console.log("false");
      }
    }
    }
  }
  
  render() {   
    const{login, password, logger, loader} = this.state;
    const data = [
      [login,"login", "Login"],[password, "password", "Password"]]

    if(!logger){
      if(loader){
        return <Redirect from="/login" to="/registration" />
      }
    return (
      <div>     
      <form onSubmit={this.onSubmit}>
      <h2>Sign in :</h2>
      <h4>For first enter</h4> 
      <p>login = qwe</p>
      <p>password = 123</p>
        {data.map( (item, index) => {
          return <Input elem = {item} key = {index} onValid = {this.handlerValid} change = {this.onChange} />
        })}
        <button >SEND</button>
      </form>
    
      </div>
    );
    } else{
      if(loader){
        return <Redirect from="/login" to="/picload"/>
      }        
    }
  }
  componentDidUpdate(){
    console.log(this.state)
  }
}

export default Login;
