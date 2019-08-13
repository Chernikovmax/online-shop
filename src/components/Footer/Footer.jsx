import React, { Component } from "react";
import { FooterInfo } from "./FooterInfo";
import { FooterSocialLinks } from "./FooterSocialLinks";
import "./Footer.css";

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="centering-wrapper">
          <FooterInfo />
        </div>
        <div className="dividing-line" />
        <FooterSocialLinks
          renderIcon={this.renderSocialIcon}
          title={"LinkedIn"}
        />
        <span className="copyright">
          Copyright © Divisima 2019 All rights reserved.
        </span>
      </div>
    );
  }
}
