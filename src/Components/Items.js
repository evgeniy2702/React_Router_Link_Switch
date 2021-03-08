import React, { Component } from "react";
import "./../style.css";
import { Switch, Route, NavLink } from "react-router-dom";

import { CityData } from "./../Const/CityData";
import List from "./List";
import Item from "./Item";

class Items extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/interestingList" component={List} />
        <Route path="/interestingList/:id" component={Item} />
      </Switch>
    );
  }
}

export default Items;
