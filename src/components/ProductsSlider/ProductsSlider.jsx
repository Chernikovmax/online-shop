import React, { Component } from "react";
import { ProductCard } from "../ProductCard";
import { RightArrowButton, LeftArrowButton } from "../buttons";
import { products } from "../../content/";

import "./ProductsSlider.css";

export class ProductsSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products.slice(0, 6),
      indicesOfRendered: [0, 1, 2, 3]
    };
    this.renderNextInterval = null;
  }

  nextIndices = () => {
    clearInterval(this.renderNextInterval);
    const { indicesOfRendered, products } = this.state;
    const lastPossibleSlide = products.length - 1;

    let indices = indicesOfRendered.map(number =>
      number++ < lastPossibleSlide ? number++ : (number = 0)
    );

    console.log(indices);

    return this.setState({
      ...this.state,
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

    console.log(indices);

    return this.setState({
      ...this.state,
      indicesOfRendered: indices
    });
  };

  renderSlides = () => {
    const { products, indicesOfRendered } = this.state;

    return indicesOfRendered.map(ind => products[ind]);
  };

  componentWillMount() {
    this.setState({
      ...this.state,
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
    this.renderNextInterval = setInterval(this.nextIndices, 5000);
  }

  render() {
    const { products } = this.state;
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
