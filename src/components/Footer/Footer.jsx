import React, { Component } from "react";
import { FooterInfo } from "./FooterInfo";
import { FooterSocialLinks } from "./FooterSocialLinks";
import { LinkedInIcon } from "../icons";
import "./Footer.css";

export class Footer extends Component {
  renderSocialIcon = isHovered => {
    return <LinkedInIcon isHovered={isHovered} />;
  };

  render() {
    return (
      <div className="footer">
        <div className="centering-wrapper">
          <FooterInfo />
        </div>
        <span className="dividing-line" />
        <FooterSocialLinks renderIcon={this.renderSocialIcon} />
      </div>
    );
  }
}
