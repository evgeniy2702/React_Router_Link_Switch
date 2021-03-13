import React from "react";
import "./../style.css";
import {Redirect} from "react-router-dom";
import  Pictures  from "./../Const/Pictures";
import Input  from "./../Forms/Input";



export default class Picload extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name:"",
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

  onSubmit(e){
    var pic = {id: (Pictures.length+1),name:this.state.name, src: this.state.src };
    Pictures.push(pic);
    this.setState({flag: true});
  }

  render(){
    const {src, flag, name} = this.state;
    var data = [[name,"name", "Enter pics name"],[src,"src","Enter url of pictures"]];
    if(!flag){
    return(
      <div>
        <form onSubmit = {this.onSubmit}>
          <h2>For example :</h2>
          <p>Name of pic enter = something</p>
          <p> src = https://st2.depositphotos.com/1053646/6104/i/600/depositphotos_61040615-stock-photo-dubai-downtown-night-scene.jpg</p>
           {data.map( (item, index) => {
          return <Input elem = {item} key = {index} onValid = {this.handlerValid} change = {this.onChange} />
        })}
          <button> SEND </button>
        </form>  
      </div>
    );
    } else {
      return <Redirect from="/picload" to="/pics" pics = {Pictures}/>
    }
  }
  
}

