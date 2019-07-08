import React, { Component } from "react";
import Modal from "./modal";

export default class LoginPage extends Component {
  render() {
    let params = new URLSearchParams(this.props.location.search);

    return (
      params.get("login") && (
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
              this.props.history.push(this.props.location.pathname);
            }}
          >
            Login modal
          </div>
        </Modal>
      )
    );
  }
}
