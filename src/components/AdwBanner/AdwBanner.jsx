import React from "react";
import "./AdwBanner.css";
import banner from "../../content/images/banner.jpg";
import { BigRoundedButton } from "../buttons";

export function AdwBanner(props) {
  return (
    <div className="banner">
      <img className="banner__background" src={banner} alt="" />
      <div className="wrapper">
        <span className="banner__min-title">NEW ARRIVALS</span>
        <span className="banner__big-title">STRIPED SHIRTS</span>
        <BigRoundedButton
          title={"SHOP NOW"}
          styleMods={{
            fillColor: "#f51167",
            borderColor: "#f51167",
            textColor: "#fff"
          }}
        />
      </div>
      <div className="big-tag">NEW</div>
    </div>
  );
}
