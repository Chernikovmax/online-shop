import React, { Component } from "react";
import { ShoppingBagIcon } from "../icons";

import "./BuyButton.css";

export class BuyButton extends Component {
  state = {
    isBuyBtnHovered: false
  };

  showText = () => {
    setTimeout(
      () =>
        this.setState({
          isBuyBtnHovered: true
        }),
      200
    );
  };

  hideText = () => {
    this.setState({
      isBuyBtnHovered: false
    });
  };

  render() {
    const { isBuyBtnHovered } = this.state;
    return (
      <button
        className="buy-btn"
        onMouseOver={this.showText}
        onMouseOut={this.hideText}
      >
        <div className="buy-btn__wrapper">
          <ShoppingBagIcon />
          {isBuyBtnHovered && <span className="hidden-text">ADD TO CARD</span>}
        </div>
      </button>
    );
  }
}
