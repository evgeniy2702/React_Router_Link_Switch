import React from "react";
import "../style.css";

import Pictures from "./Const/Pictures";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      src: "",
      desc: "",
      tags: []
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(event) {
    this.state.name = this.setState(event.target.value);
  }

  onClick(event) {
    alert(Name - `{this.state.name}`);
  }

  render() {
    return (
      <form >
        <label for="login">Login :</label>
        <input
          type="text"
          placeholder="Enter your Login"
          id="login"
          name="login" 
        />
        <br />
        <br />
        <label for="password">Password :</label>
        <input
          type="password"
          placeholder="Enter your password"
          id="password"
          name="password"
        />
        <br />
        <br />
        <input
          type="submit"
          value="SEND"
          onClick={alert("Name -" + `${this.state.name}`)}
        />
      </form>
    );
  }
}

export default Login;
