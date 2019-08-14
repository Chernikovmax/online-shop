import React, { Component } from "react";
import { ProductCard } from "../ProductCard";
import { RightArrowButton, LeftArrowButton } from "../buttons";
import { products } from "../../content/";

import "./ProductsSlider.css";

export class ProductsSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products.slice(4, 10),
      indicesOfRendered: [0, 1, 2, 3]
    };
    this.renderNextInterval = null;
  }

  nextIndices = () => {
    clearInterval(this.renderNextInterval);
    this.nextSlide();
  };

  nextSlide = () => {
    const { indicesOfRendered, products } = this.state;
    const lastPossibleSlide = products.length - 1;

    let indices = indicesOfRendered.map(number =>
      number + 1 < lastPossibleSlide ? number + 1 : 0
    );

    this.setState({
      indicesOfRendered: indices
    });
  };

  previousIndices = () => {
    clearInterval(this.renderNextInterval);
    const { indicesOfRendered, products } = this.state;
    const lastPossibleSlide = products.length - 1;

    let indices = indicesOfRendered.map(number =>
      number-- > 0 ? number-- : (number = lastPossibleSlide)
    );

    this.setState({
      indicesOfRendered: indices
    });
  };

  renderSlides = () => {
    const { products, indicesOfRendered } = this.state;

    return indicesOfRendered.map(ind => products[ind]);
  };

  componentWillMount() {
    this.setState({
      products: this.state.products.map((product, index) => {
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
      })
    });
    this.renderNextInterval = setInterval(this.nextSlide, 5000);
  }

  render() {
    const TOGGLE_BUTTON_SIZE = 43;

    return (
      <div className="products-slider">
        <LeftArrowButton
          size={TOGGLE_BUTTON_SIZE}
          onClick={this.previousIndices}
        />
        <div className="product-slides">{this.renderSlides()}</div>
        <RightArrowButton
          size={TOGGLE_BUTTON_SIZE}
          onClick={this.nextIndices}
        />
      </div>
    );
  }
}
