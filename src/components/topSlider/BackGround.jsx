import React, { Component } from "react";

export class Background extends Component {
  render() {
    const { imageURL, productName } = this.props;
    return (
      <img
        src={imageURL}
        alt={productName}
        className="slide__background"
        style={{
          transform: `translate(${this.props.axisX}px, ${this.props.axisY}px)`
        }}
      />
    );
  }
}
