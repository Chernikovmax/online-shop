import React from "react";
import { RightArrowIcon } from "../icons";

export const RightArrowButton = props => {
  const { handleClick, size } = props;
  const iconSize = size - 3;
  const styles = {
    border: "1px solid #ffffffa3",
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
    <button style={styles} onClick={handleClick}>
      <RightArrowIcon size={iconSize} />
    </button>
  );
};
