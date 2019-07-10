import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Modal from "./modal";

export default class ProfilePage extends Component {
  render() {
    return (
      <div>
        <Link to={`${this.props.match.url}/edit`}>Edit Profile</Link>
        <Link to={{ pathname: this.props.match.url, search: "?login=true" }}>Login</Link>

        <Route
          path={`${this.props.match.url}/edit`}
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
                  Edit Profile Modal!
                </div>
              </Modal>
            );
          }}
        />
      </div>
    );
  }
}
