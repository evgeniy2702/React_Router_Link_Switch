import React from "react";
import "./style.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter,
  Link
} from "react-router-dom";

import City from "./Components/City";
import MainInteresting from "./Components/MainInteresting";
import Interesting from "./Components/Interesting";
import Pics from "./Components/Pics";
import Items from "./Components/Items";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <h1>Menu Task 1</h1>
        <Header />
        <Main />
      </Router>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <ul>
          <li>
            <Link to="/about">About city</Link>
          </li>
          <li>
            <Link to="/main/interesting">Main interesting in cty</Link>
          </li>
          <li>
            <Link to="/interesting">Interesting in city</Link>
          </li>
          <li>
            <Link to="/interestingList">List of interestings in city</Link>
          </li>
          <li>
            <Link to="/pics">Pics of city</Link>
          </li>
        </ul>
        <Link to="/">In start menu</Link>
      </header>
    );
  }
}

class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route excat path="/about" component={City} />
          <Route path="/main/interesting" component={MainInteresting} />
          <Route path="/interesting" component={Interesting} />
          <Route path="/interestingList" component={Items} />
          <Route path="/pics" component={Pics} />
          <Redirect from ="/" to ="" />
        </Switch>
      </main>
    );
  }
}
