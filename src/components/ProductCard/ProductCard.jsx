import React, { Component } from "react";
import { BuyButton, LikeButton } from "../buttons";
import "./ProductCard.css";

export class ProductCard extends Component {
  render() {
    const {
      id,
      imageUrl,
      productTitle,
      price,
      isNewCollection,
      isOnSale
    } = this.props;

    return (
      <div className="product-card">
        {isNewCollection && (
          <span className="product-card__label label--green">NEW</span>
        )}
        {isOnSale && (
          <span className="product-card__label label--pink">ON SALE</span>
        )}
        <img className="product-card__image" src={imageUrl} alt="product" />
        <div className="product-card__buttons">
          <BuyButton />
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
