import React from "react";

export const LeftArrowIcon = props => {
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
          fill: "#a4a4a4"
        }}
      >
        <path d="M135.412 0L35.709 99.702 135.412 199.404 163.695 171.119 92.277 99.702 163.695 28.285z" />
      </svg>
    </div>
  );
};
