import React, { Component } from "react";
import { ShoppingBagIcon } from "../icons";

import "./BuyButton.css";

export class BuyButton extends Component {
  constructor(props) {
    super(props);
    this.renderButtonText = null;
    this.state = {
      isBuyBtnHovered: false
    };
  }

  showText = () => {
    this.renderButtonText = setTimeout(
      () =>
        this.setState({
          isBuyBtnHovered: true
        }),
      200
    );
  };

  hideText = () => {
    clearTimeout(this.renderButtonText);
    this.setState({
      isBuyBtnHovered: false
    });
  };

  render() {
    const { isBuyBtnHovered } = this.state;
    const style = { width: "150px" };
    return (
      <button
        className="buy-btn"
        onMouseEnter={this.showText}
        onMouseLeave={this.hideText}
      >
        <ShoppingBagIcon />
        {isBuyBtnHovered && (
          <span className="buy-btn__hidden-text">ADD TO CARD</span>
        )}
      </button>
    );
  }
}
