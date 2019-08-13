import React from "react";

export const FacebookIcon = props => {
  const { isHovered } = props;
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        enableBackground="new 0 0 90 90"
        viewBox="0 0 90 90"
        style={{
          width: "30px",
          height: "30px",
          fill: `${isHovered ? "#4267b2" : "#d7d7d7"}`,
          transition: "fill 0.2s"
        }}
      >
        <path d="M90 15.001C90 7.119 82.884 0 75 0H15C7.116 0 0 7.119 0 15.001v59.998C0 82.881 7.116 90 15.001 90H45V56H34V41h11v-5.844C45 25.077 52.568 16 61.875 16H74v15H61.875C60.548 31 59 32.611 59 35.024V41h15v15H59v34h16c7.884 0 15-7.119 15-15.001V15.001z" />
      </svg>
    </div>
  );
};