import React, { Component } from "react";
import { TopSlider } from "../../components/TopSlider";
import woman1 from "../../content/images/woman1.jpg";
import woman2 from "../../content/images/woman2.jpg";
import { ProductsSlider } from "../../components/ProductsSlider";
import { TopSellingProducts } from "../../components/TopSellingProducts";
import { AdwBanner } from "../../components/AdwBanner";
import "./HomePage.css";

const topProducts = [
  {
    productTitle: "new arrivals",
    productName: "denim jackets",
    productDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus-pendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.`,
    productCost: "$29",
    imageURL: woman1
  },
  {
    productTitle: "new arrivals",
    productName: "denim jackets",
    productDescription: `Ea minim consectetur eiusmod officia nisi pariatur consequat sunt veniam. Cillum adipisicing sint ullamco nulla non aliqua incididunt voluptate minim. Aliquip laboris excepteur cillum nulla. Duis nostrud velit nisi excepteur.`,
    productCost: "$29",
    imageURL: woman2
  }
];

export class HomePage extends Component {
  render() {
    return (
      <div>
        <TopSlider products={topProducts} />
        <div className="latest-products">
          <h1>LATEST PRODUCTS</h1>
          <ProductsSlider />
        </div>
        <TopSellingProducts />
        <div className="centering-wrapper">
          <AdwBanner />
        </div>
      </div>
    );
  }
}
