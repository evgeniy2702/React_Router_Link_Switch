import React from "react";
import "./../style.css";
import CityData from "./../Const/CityData";

export default class City extends React.Component {
  render() {
    return (
      <div>
        <h1>Info about city :</h1>
        <p> Name : {CityData.about.name}</p>
        <p> Population : {CityData.about.population}</p>
        <div>
          Description :
          <p className="interesting">
            <i>{CityData.about.desc}</i>
          </p>
        </div>
      </div>
    );
  }
}
