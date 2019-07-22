import React, { Component } from 'react';
import './TopSlider.css';

export class TopSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    parallax = (event) => {
        
        this.styles.transform = `translate(${event.clientX/30}px, ${event.clientY/30}px)`;
    }

    render() {
        const { products } = this.props;
        return (
            <div className="top-slider">
                { 
                    products.map(product => {
                        const { 
                            productTitle, productName, productDescription, productCost, imageURL 
                        } = product;
                        return (
                            <div key={imageURL} className="slide">
                                <img src={imageURL} alt={productName}
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
                                        <button className="slide__btn slide__btn-buy">ADD TO CARD</button>
                                    </div>

                                </div>
                                <div className="slide__price-block">
                                    <span>from</span>
                                    <span className="slide__price">{productCost}</span>
                                    <span>SHOP NOW</span>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}