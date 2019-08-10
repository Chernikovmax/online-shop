import React, { Component } from "react";
import { RightArrowIcon, LeftArrowIcon } from "../icons";
import cx from "classnames";
import { Background } from "./";
import "./TopSlider.css";

export class TopSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slidesCount: this.props.products.length,
      activeSlide: 0,
      coordinates: {
        axisX: 0,
        axisY: 0
      }
    };
    this.autoPlay = setInterval(this.nextSlide, 4000);
  }

  nextSlide = () => {
    const { slidesCount, activeSlide } = this.state;

    let currentSlide = activeSlide;
    let slidesQuantity = slidesCount;
    slidesQuantity--;
    let nextSlide = currentSlide++ < slidesQuantity ? currentSlide++ : 0;

    this.setState({
      ...this.state,
      activeSlide: nextSlide
    });
  };

  renderNext = () => {
    clearInterval(this.autoPlay);
    this.nextSlide();
  };

  renderPrevious = () => {
    clearInterval(this.autoPlay);
    const { slidesCount, activeSlide } = this.state;

    let currentSlide = activeSlide;
    let slidesQuantity = slidesCount;
    slidesQuantity--;
    let nextSlide = currentSlide-- > 0 ? currentSlide-- : slidesQuantity;

    this.setState({
      ...this.state,
      activeSlide: nextSlide
    });
  };

  setMouseCoords = event => {
    this.setState({
      ...this.state,
      coordinates: {
        axisX: -event.clientX / 30,
        axisY: -event.clientY / 30
      }
    });
  };

  render() {
    const { products } = this.props;
    const {
      activeSlide,
      slidesCount,
      coordinates: { axisX, axisY }
    } = this.state;
    let currentSlide = activeSlide;

    return (
      <div className="top-slider" onMouseMove={this.setMouseCoords}>
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
              <Background
                imageURL={imageURL}
                productName={productName}
                axisX={axisX}
                axisY={axisY}
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
            <button
              className="top-slider__togglers-btn"
              onClick={this.renderPrevious}
            >
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
            <button
              className="top-slider__togglers-btn"
              onClick={this.renderNext}
            >
              <RightArrowIcon />
            </button>
          </div>
          <div className="slider__counter">{`${++currentSlide} / ${slidesCount}`}</div>
        </div>
      </div>
    );
  }
}
