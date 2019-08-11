import React, { Component } from "react";
import { ProductCard } from "../ProductCard";
import "./ProductsSlider.css";
import { products } from "../../content/";

export class ProductsSlider extends Component {
  state = {
    products: products.slice(0, 6)
  };

  render() {
    const { products } = this.state;
    return (
      <div className="products-slider">
        {products.map((product, index) => {
          const {
            id,
            imageUrl,
            productTitle,
            price,
            isNewCollection,
            isOnSale
          } = products[index];
          return (
            <ProductCard
              key={id}
              id={id}
              imageUrl={imageUrl}
              productTitle={productTitle}
              price={price}
              isNewCollection={isNewCollection}
              isOnSale={isOnSale}
            />
          );
        })}
      </div>
    );
  }
}
