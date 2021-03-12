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
      login:"",
      password:""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }  

  onChange(event) {
    let{ id, value} = event.target;
    this.setState({[id]: value});
  }

  onSubmit(e){
    e.preventDefault();
    let num = 0;
    let user = {id:0, login:"", password:""};
    for(let i = 0; i < array.length; i++){
      if(array[i].login !== this.state.login && array[i].password !== this.state.password){
        num++;           
      } else {
        <Redirect from="/registration" to="/registration" component = {Registration} />
      }
      }
    user.id = num;
    user.login = this.state.login;
    user.password = this.state.password;
    array.push(user);
      <Route path="/login" component={Login} />

  }

  render() {
    const{ login, password} = this.state;
    const data = [
      [login,"Enter your login"],[password, "Enter your password"]
    ];
    return (
      <div>     
      <form onSubmit={this.onSubmit}>
      <h2>Registration :</h2>
        {data.map( (item, index) => {
          return <Input elem = {item} key = {index} onChange = {this.onChange}  />
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
