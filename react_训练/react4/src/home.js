import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Ce from "./ce";
import Ce1 from "./ce1";


class Home extends React.Component {

  render() {
    return (
      <div>
        <h2>HELLO</h2>
        <p>Cras facilisis urna ornare ex volutpat, et
          convallis erat elementum. Ut aliquam, ipsum vitae
          gravida suscipit, metus dui bibendum est, eget rhoncus nibh
          metus nec massa. Maecenas hendrerit laoreet augue
          nec molestie. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.</p>
          <p><NavLink to="/home/ce">Ce</NavLink></p>
          <p><NavLink to="/home/ce1">Ce1</NavLink></p>
        </div>
    );
  }
}

export default Home
