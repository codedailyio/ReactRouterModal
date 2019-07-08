import React, { Component } from "react";
import { createPortal } from "react-dom";

export default class Modal extends Component {
  render() {
    return createPortal(this.props.children, document.body);
  }
}
