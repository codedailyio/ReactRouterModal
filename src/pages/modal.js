import React, { Component } from "react";
import { createPortal } from "react-dom";

const modalStyle = {
  position: "fixed",
  left: 0,
  top: 0,
  bottom: 0,
  right: 0,
  backgroundColor: "rgba(0,0,0,.2)",
  color: "#FFF",
  fontSize: "40px",
};
export default class Modal extends Component {
  render() {
    return createPortal(
      <div style={modalStyle} onClick={this.props.onClick}>
        {this.props.children}
      </div>,
      document.getElementById("modal_root"),
    );
  }
}
