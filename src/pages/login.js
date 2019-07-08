import React, { Component } from "react";
import Modal from "./modal";

export default class LoginPage extends Component {
  render() {
    let params = new URLSearchParams(this.props.location.search);

    return (
      params.get("login") && (
        <Modal
          onClick={() => {
            this.props.history.push(this.props.location.pathname);
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            Login modal
          </div>
        </Modal>
      )
    );
  }
}
