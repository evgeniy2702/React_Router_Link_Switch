import React, { Component } from "react";
import "./../style.css";
import {NavLink } from "react-router-dom";

import CityData  from "./../Const/CityData";
import Pictures  from "./../Const/Pictures";

const array = CityData.interesting;
const picsArray = Pictures;

export default class Item extends Component{
  render(){
  const id = this.props.match.params.id;
  let item;
  let pic;
  for(let i=0; i< array.length; i++){
    if(array[i].id == id){
      item = array[i];
      pic = picsArray[i];
      break;
    }
  }
  if(item === undefined){
      return <h1>Item with id = {id} was not fined</h1>;
    }
    else{
      return <div>
        <p>Name of intresting: <i>{item.name}</i></p>
        <p>Description : <i>{item.desc}</i></p>
        <p>Picture : <img src = {pic.src} /></p>
        </div>
    }  
  }
}