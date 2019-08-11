import React from "react";
import { LeftArrowIcon } from "../icons";

export const LeftArrowButton = props => {
  const { onClick, size } = props;
  const iconSize = size - 3;
  const styles = {
    border: "1px solid #a4a4a4",
    borderRadius: "50%",
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    height: `${size}px`,
    width: `${size}px`
  };
  return (
    <button style={styles} id="left-btn" onClick={onClick}>
      <LeftArrowIcon size={iconSize} />
    </button>
  );
};
