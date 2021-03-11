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
    this.state = {
      login:"",
      password:""
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
        console.log(this.state.login + " " + this.state.password);
        return <Registration />
    }
      else {
        console.log("false");
      }
    }
      }
  

  render() {   
    const{login, password} = this.state;
    const data = [
      [login,"login"],[password, "password"]
    ];
    return (
      <div>     
      <form onSubmit={this.onSubmit}>
        {data.map( (item, index) => {
            return <Input elem = {item} key = {index} onChange = {this.onChange}/>
        })}

        <button>SEND</button>
      </form>
     
      </div>
    );
  }
  componentDidUpdate(){
    console.log(this.state)
  }
}

export default Login;
