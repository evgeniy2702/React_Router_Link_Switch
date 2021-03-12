import React from "react";
import "./../style.css";
import  Pictures  from "./../Const/Pictures";

export default class Pics extends React.Component {
  render() {
    return (
      <ul className="pics">
        {Pictures.map(item => (
          <li key={item.id}>
            <img src={item.src} />
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    );
  }
}
