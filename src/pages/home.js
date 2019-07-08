import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "./modal";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Link to="/profile">Go To Profile</Link>
        <Link to={{ pathname: "/", search: "?login=true" }}>Login</Link>
      </div>
    );
  }
}
