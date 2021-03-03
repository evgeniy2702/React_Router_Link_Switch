import React, { Component } from "react";
import "./../style.css";

import { CityData } from "./../Const/CityData";

export default class Interesting extends Component {
  render() {
    return (
      <ol>
        {CityData.interesting.map(item => (
          <li key={item.id}>
            <ul>
              <li>
                Name : <i>{item.name}</i>
              </li>
              <li>
                Description : <p className="interesting">{item.desc}</p>
              </li>
            </ul>
          </li>
        ))}
      </ol>
    );
  }
}
