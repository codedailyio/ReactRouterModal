import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Modal from "./modal";

export default class ProfilePage extends Component {
  render() {
    return (
      <div>
        <Link to={`${this.props.match.url}/modal`}>Edit Profile</Link>
        <Link to={{ pathname: this.props.match.url, search: "?login=true" }}>Login</Link>

        <Route
          path={`${this.props.match.url}/modal`}
          render={() => {
            return (
              <Modal>
                <div
                  style={{
                    position: "fixed",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    right: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(0,0,0,.2)",
                    color: "#FFF",
                    fontSize: "40px",
                  }}
                  onClick={() => {
                    this.props.history.push("/profile");
                  }}
                >
                  Look at the modal!
                </div>
              </Modal>
            );
          }}
        />
      </div>
    );
  }
}
