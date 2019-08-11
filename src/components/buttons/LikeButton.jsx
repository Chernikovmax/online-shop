import React, { Component } from "react";
import { EmptyHeartIcon, FilledHeartIcon } from "../icons";
import "./LikeButton.css";

export class LikeButton extends Component {
  state = {
    isLiked: this.props.isLiked
  };

  toggleLike = () => {
    this.setState({
      ...this.state,
      isLiked: !this.state.isLiked
    });
  };

  render() {
    const { isLiked } = this.state;
    return (
      <button className="like-btn" onClick={this.toggleLike}>
        {isLiked ? <FilledHeartIcon /> : <EmptyHeartIcon />}
      </button>
    );
  }
}
