import React from "react";
import "./../style.css";
import  Pictures  from "./../Const/Pictures";
import Input  from "./../Forms/Input";


export default class Picload extends React.Component {

  constructor(props){
    super(props);
    var logins = this.props.array;
    this.state = {
      src:"",
      flag: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handlerValid = this.handlerValid.bind(this);
  }  

  onChange(idData,dataInput) {
    this.setState({[idData]: dataInput})
  }
  handlerValid (elem){
  if((elem).match('^[^\s]+') != null){
    return {borderColor: "green"};
  }
    return {borderColor: "red"};
  }

  onSubmit(){
    console.log(Pictures.length);
    
  }
  render(){
    const {src} = this.state;
    var item = [src,"src","Enter url of pictures"];
    return(
      <div>
        <form onSubmit = {this.onSubmit}>
          <h2>Hello. PicLoad will be there.</h2>
            <Input elem = {item} key = {Pictures.length + 1} change = {this.onChange}  onValid = {this.handlerValid} />
          <button> SEND </button>
        </form>  
      </div>
    );
  }
  
}

