import React, { Component } from "react";
import "./../style.css";

import CityData from "./../Const/CityData";


export default class MainInteresting extends Component{
  render(){
    return(
      <div>
          <h1> Main interesting :</h1>
            <p> Name : <i>{CityData.mainInteresting.name}</i></p>
            <p> Description : <i>{CityData.mainInteresting.desc}</i></p> 
            <img src = {CityData.mainInteresting.pic} />
      </div>  
    );
  }
}
