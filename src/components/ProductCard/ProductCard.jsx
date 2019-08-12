import React, { Component } from "react";
import { BuyButton, LikeButton } from "../buttons";
import "./ProductCard.css";

export class ProductCard extends Component {
  state = {
    rotateCardInAxisX: 0,
    rotateCardInAxisY: 0
  };

  changePosition = event => {
    const cardCoords = event.target.getBoundingClientRect();

    const mouseInWindowX = event.clientX;
    const mouseInWindowY = event.clientY;

    const cursorOnElementX = mouseInWindowX - cardCoords.left;
    const cursorOnElementY = mouseInWindowY - cardCoords.top;

    const centerOfCardX = cardCoords.width / 2;
    const centerOfCardY = cardCoords.height / 2;

    const degreesX = Math.round((cursorOnElementX - centerOfCardX) / 15);
    const degreesY = -Math.round((cursorOnElementY - centerOfCardY) / 15);

    this.setState({
      rotateCardInAxisX: degreesY,
      rotateCardInAxisY: degreesX
    });
  };

  clearAxisValues = () => {
    this.setState({
      rotateCardInAxisX: 0,
      rotateCardInAxisY: 0
    });
  };

  render() {
    const {
      id,
      imageUrl,
      productTitle,
      price,
      isNewCollection,
      isOnSale
    } = this.props;
    const { rotateCardInAxisX, rotateCardInAxisY } = this.state;

    return (
      <div
        className="product-card"
        onMouseMove={this.changePosition}
        onMouseLeave={this.clearAxisValues}
      >
        {isNewCollection && (
          <span className="product-card__label label--green">NEW</span>
        )}
        {isOnSale && (
          <span className="product-card__label label--pink">ON SALE</span>
        )}
        <img
          style={{
            transform: `rotateX(${rotateCardInAxisX}deg) rotateY(${rotateCardInAxisY}deg)`
          }}
          className="product-card__image"
          src={imageUrl}
          alt="product"
        />
        <div className="product-card__buttons">
          <BuyButton id={id} />
          <LikeButton />
        </div>
        <div className="product-card__info">
          <span className="product-card__info-title">{productTitle}</span>
          <span className="product-card__info-price">{price}</span>
        </div>
      </div>
    );
  }
}
