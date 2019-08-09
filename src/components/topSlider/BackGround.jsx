import React, { PureComponent } from "react";

export class Background extends PureComponent {
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
