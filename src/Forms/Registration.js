import React from "react";
import "../style.css";
import {Redirect} from "react-router-dom";

import Logins from "./../Const/Logins";
import Input  from "./../Forms/Input";

class Registration extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      loginReg:"",
      passwordReg:"",
      reg: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handlerValid = this.handlerValid.bind(this);
  }  

  onChange(idData,dataInput) {
    this.setState({[idData]: dataInput})
  }

  handlerValid(elem){
    for(let i = 0; i< Logins.length; i++){
    if((elem).match("^\[a-zA-Z0-9]{5,6}$") != null){
      return {borderColor: "green"};
    }
    else {
      if((elem).match("^\[a-zA-Z0-9]{2,}[@][a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,3}$") !== null){
        return {borderColor: "green"};
      }

    return {borderColor: "red"}
    }
    }
  }

  onSubmit(e){
    e.preventDefault();
    console.log(this.state.loginReg);
    let newUser = {id:(Logins.length+1), login: this.state.loginReg, password: this.state.passwordReg};
    Logins.push(newUser);
    this.setState({reg: true});
    console.log(Logins);
    }

  render() {
    const{ loginReg, passwordReg, reg} = this.state;
    const data = [
      [loginReg,"loginReg","Enter your Login"],[passwordReg, "passwordReg","Enter your Password"]
    ];
    if(!reg){
    return (
      <div>     
      <form onSubmit={this.onSubmit}>
      <h2>Registration :</h2>
        {data.map( (item, index) => {
          return <Input elem = {item} key = {index} change = {this.onChange}  onValid = {this.handlerValid} />
        })}
        <button>SEND</button>
      </form>
      </div>
    );
    } else {
    return <Redirect from="/registration" to="/login" logins = {Logins}/>
  }
  } 
  componentDidUpdate(){
    console.log(this.state);
  }
}

export default Registration;
