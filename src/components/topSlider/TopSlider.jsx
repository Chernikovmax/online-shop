import React, { Component } from "react";
import { RightArrowIcon, LeftArrowIcon } from "../icons";
import cx from "classnames";
import "./TopSlider.css";

export class TopSlider extends Component {
  state = {
    slidesCount: this.props.products.length,
    activeSlide: 0
  };

  showSlides = () => {
    const { slidesCount, activeSlide } = this.state;
    console.log(slidesCount, activeSlide);

    let currentSlide = activeSlide;
    let slidesQuantity = slidesCount;
    slidesQuantity--;
    let nextSlide = currentSlide++ < slidesQuantity ? currentSlide++ : 0;
    this.setState({
      ...this.state,
      activeSlide: nextSlide
    });
  };

  parallax = event => {
    // this.styles.transform = `translate(${event.clientX /
    //   30}px, ${event.clientY / 30}px)`;
  };

  componentDidMount() {
    setInterval(this.showSlides, 4000);
  }
  render() {
    const { products } = this.props;
    const { activeSlide, slidesCount } = this.state;
    let currentSlide = activeSlide;

    return (
      <div className="top-slider">
        {products.map((product, index) => {
          const {
            productTitle,
            productName,
            productDescription,
            productCost,
            imageURL
          } = product;
          return (
            <div
              key={imageURL}
              className={cx(
                "slide",
                this.state.activeSlide === index && "slide--active"
              )}
            >
              <img
                src={imageURL}
                alt={productName}
                className="slide__background"
                onMouseMove={this.parallax}
              />
              <div className="slide__content">
                <span className="slide__product-title">
                  {productTitle.toUpperCase()}
                </span>
                <span className="slide__product-name">
                  {productName.toUpperCase()}
                </span>
                <p className="slide__product-description">
                  {productDescription}
                </p>
                <div className="slide__buttons">
                  <button className="slide__btn">DISCOVER</button>
                  <button className="slide__btn slide__btn-buy">
                    ADD TO CARD
                  </button>
                </div>
              </div>
              <div className="slide__price-block">
                <div className="price-block__wrapper">
                  <span>from</span>
                  <span className="slide__price">{productCost}</span>
                  <span>SHOP NOW</span>
                </div>
              </div>
            </div>
          );
        })}
        <div className="slider__footer">
          <div className="top-slider__togglers">
            <button className="top-slider__togglers-btn">
              <LeftArrowIcon />
            </button>
            <div
              className={cx(
                "top-slider__togglers-dots",
                activeSlide === 0 && "toggler-dot--active"
              )}
            />
            <div
              className={cx(
                "top-slider__togglers-dots",
                activeSlide === 1 && "toggler-dot--active"
              )}
            />
            <button className="top-slider__togglers-btn">
              <RightArrowIcon />
            </button>
          </div>
          <div className="slider__counter">{`${++currentSlide} / ${slidesCount}`}</div>
        </div>
      </div>
    );
  }
}
