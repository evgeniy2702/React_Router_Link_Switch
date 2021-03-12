import React from "react";
import "../style.css";
import {Route} from "react-router-dom";

import {Logins} from "./../Const/Logins";
import Input  from "./../Forms/Input";

const array = Logins;

class Registration extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      loginReg:"",
      passwordReg:""
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
    if(elem.length > 3)
    return {borderColor: "green"};
    if(elem.l === 3)
    return {borderColor: "green"};
    return {borderColor: "red"}
    }
  }

  onSubmit(e){
    e.preventDefault();
    }

  render() {
    const{ loginReg, passwordReg} = this.state;
    const data = [
      [loginReg,"loginReg","Enter your Login"],[passwordReg, "passwordReg","Enter your Password"]
    ];
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
  }
  componentDidUpdate(){
    console.log(this.state)
  }
}

export default Registration;
