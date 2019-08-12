import React from "react";
import { ProductCard } from "../ProductCard";
import { products } from "../../content/";
import { SortBySectionButton, BigRoundedButton } from "../buttons";

import "./TopSellingProducts.css";

export function TopSellingProducts() {
  return (
    <div className="top-selling-products">
      <h1 className="top-selling-products__title">
        BROWSE TOP SELLING PRODUCTS
      </h1>
      <div className="top-selling-products__categories">
        <SortBySectionButton title={"TOPS"} />
        <SortBySectionButton title={"JUMPSUITS"} />
        <SortBySectionButton title={"LINGERIE"} />
        <SortBySectionButton title={"JEANS"} />
        <SortBySectionButton title={"DRESSES"} />
        <SortBySectionButton title={"COATS"} />
        <SortBySectionButton title={"JUSMPERS"} />
        <SortBySectionButton title={"LEGGENS"} />
      </div>
      <div className="products">
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
      <BigRoundedButton
        title={"LOAD MORE"}
        styleMods={{
          fillColor: "transparent",
          borderColor: "#111",
          textColor: "#111"
        }}
      />
    </div>
  );
}
