import React from "react";
import "./../style.css";
import { CityData } from "./../Const/CityData";

export default class Pics extends React.Component {
  render() {
    return (
      <ul className="pics">
        {CityData.pics.map(item => (
          <li key={item.id}>
            <img src={item.src} />
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    );
  }
}
