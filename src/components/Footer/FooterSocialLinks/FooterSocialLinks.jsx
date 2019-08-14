import React, { Component } from "react";
import { SocialLinkButton } from "./SocialLinkButton";

import "./FooterSocialLinks.css";

export class FooterSocialLinks extends Component {
  toggleColor = () => {
    this.setState({
      isHovered: !this.state.isHovered
    });
  };

  render() {
    return (
      <div className="footer__links-wrapper">
        <SocialLinkButton
          link={"https://www.linkedin.com/in/chernikovmax/"}
          title={"LinkedIn"}
        />
        <SocialLinkButton
          link={"https://github.com/Chernikovmax"}
          title={"GitHub"}
        />
        <SocialLinkButton
          link={"https://www.facebook.com/chernik.max"}
          title={"Facebook"}
        />
        <SocialLinkButton
          link={"https://www.vk.com/chernikovmax"}
          title={"Vkontakte"}
        />
        <SocialLinkButton
          link={"http://t-do.ru/chernikovmax/"}
          title={"Telegram"}
        />
      </div>
    );
  }
}
