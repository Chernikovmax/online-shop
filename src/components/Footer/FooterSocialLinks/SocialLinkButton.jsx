import React, { Component } from "react";

import { Link } from "react-router-dom";
import {
  LinkedInIcon,
  GitHubIcon,
  FacebookIcon,
  VKIcon,
  TelegramIcon
} from "../../icons";

export class SocialLinkButton extends Component {
  state = { isHovered: false };

  toggleColor = () => {
    this.setState({
      isHovered: !this.state.isHovered
    });
  };

  renderIcon = (title, isHovered) => {
    switch (title) {
      case "LinkedIn":
        return <LinkedInIcon isHovered={isHovered} />;

      case "GitHub":
        return <GitHubIcon isHovered={isHovered} />;

      case "Facebook":
        return <FacebookIcon isHovered={isHovered} />;

      case "Vkontakte":
        return <VKIcon isHovered={isHovered} />;
      case "Telegram":
        return <TelegramIcon isHovered={isHovered} />;

      default:
        return;
    }
  };

  render() {
    const { isHovered } = this.state;
    const { title, link } = this.props;
    return (
      <Link
        className="footer__social-link"
        to={link}
        onMouseEnter={this.toggleColor}
        onMouseLeave={this.toggleColor}
      >
        {this.renderIcon(title, isHovered)}
        <span className="footer__social-link-title">{title}</span>
      </Link>
    );
  }
}
