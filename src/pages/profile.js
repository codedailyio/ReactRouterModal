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
              <Modal
                onClick={() => {
                  this.props.history.push(this.props.match.url);
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: '100%'
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
