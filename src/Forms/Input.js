import React from "react";
import "./../style.css";
import PropTypes from "prop-types";

function Input({elem, onChange}){

  let type = "text";
  if(elem[1] === "password"){
    type = "password";
  }

  return(
    <div>
  
      <label>{elem[1]} :</label>
            <input
              id = {elem[1]}
              type= {type}
              placeholder={"Enter your " + elem[1]}
              value = {elem[0]}
              onChange= {(e,id)=>onChange(elem[1],e.target.value )}
            />
            <br />
            <br />
  
    </div>
  )
}

Input.PropTypes = {
  elem: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
}
export default Input;