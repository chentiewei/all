import React, { Component } from "react";
import {
  Route,
  NavLink,
  Switch,
  HashRouter
} from "react-router-dom";
import Home from "./home";
import Stuff from "./stuff";
import Ce from "./ce";
import Ce1 from "./ce1";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
          </ul>
          <div className="content">
            <Switch>
              <Route exact path="/home" component={Home}>
                <Route path="/home/ce" component={Ce}/>
                <Route path="/home/ce1" component={Ce1}/>
              </Route>
              <Route path="stuff" component={Stuff}/>
            </Switch>
          </div>
        </div>
      </HashRouter>
    )
  }
}



export default Main;
