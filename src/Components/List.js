import React, { Component } from "react";
import "./../style.css";
import { NavLink } from "react-router-dom";

import { CityData } from "./../Const/CityData";

class List extends Component {
  render() {
    return (
      <div>
        <h1>List of intrestings of city :</h1>
        <ul>
          {CityData.interesting.map(item => (
            <li key={item.id}>
              <NavLink style={{color:"red"}}
               to={`/interestingList/${item.id}`}>{item.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
