import React from "react";
import "./../style.css";
import  Pictures  from "./../Const/Pictures";

class Picload extends React.Component {

  constructor(props){
    super(props);
    var array = this.props.array;
  }

  render(){
    return(
      <div>Hello. PicLoad will be there.</div>
    );
  }
}

export default Picload;