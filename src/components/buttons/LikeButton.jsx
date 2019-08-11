import React, { Component } from "react";
import { EmptyHeartIcon, FilledHeartIcon } from "../icons";

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
    const styles = {
      border: "none",
      borderRadius: "30px",
      width: "36px",
      height: "36px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      backgroundColor: "#fff"
    };
    const { isLiked } = this.state;
    return (
      <button style={styles} onClick={this.toggleLike}>
        {isLiked ? <FilledHeartIcon /> : <EmptyHeartIcon />}
      </button>
    );
  }
}
