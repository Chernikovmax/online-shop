import React from "react";

export const RightArrowIcon = props => {
  const { size } = props;
  const iconSize = size - 3;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: `${size}`,
        height: `${size}`
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        viewBox="0 0 199.404 199.404"
        style={{
          width: `${iconSize}`,
          height: `${iconSize}`,
          fill: "#ffffffa3"
        }}
      >
        <path d="M72.166 200.24l97.26-102.087L67.34.893 39.748 29.855l73.135 69.668-69.678 73.125z" />
      </svg>
    </div>
  );
};
