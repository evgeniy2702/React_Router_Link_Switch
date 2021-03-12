import React from "react";
import "./../style.css";
import PropTypes from "prop-types";
import {Logins} from "./../Const/Logins";

function Input({elem, onChange}){

  let type = "text";

  if(elem[1] === "password"){
    type = "password";
  }
  function valid(elem){
    for (let i = 0; i < Logins.length; i++){
    if(type === "text")
      if(Logins[i].login === elem){
      return {borderColor: "green"};
      }
      else {
      return {borderColor: "red"};
      }
    if(type === "password")
      if(elem === Logins[i].password){
      return {borderColor: "green"};
      }
      else {
      return {borderColor: "red"};
      } 
    } 
  }
  return(
    <div>
      <label>{elem[1]} :</label>
            <input
              style = {valid(elem[0])}
              id = {elem[1]}
              type= {type}
              placeholder={"Enter your " + elem[1]}
              value = {elem[0]}
              onChange= {(e)=>onChange(elem[1],e.target.value )}
            />
            <br />
            <br />
  
    </div>
  )
}

Input.propTypes = {
  elem: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
}
export default Input;