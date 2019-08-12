import React from "react";

export const BigRoundedButton = props => {
  const {
    styleMods: { fillColor, borderColor, textColor },
    onClick
  } = props;
  const styles = {
    fontSize: "14px",
    fontWeight: "600",
    border: `1px solid ${borderColor}`,
    borderRadius: "20px",
    height: "45px",
    paddingLeft: "40px",
    paddingRight: "40px",
    backgroundColor: `${fillColor}`,
    color: `${textColor}`,
    cursor: "pointer"
  };
  if (props.onClick) {
    return (
      <button onClick={onClick} style={styles}>
        {props.title}
      </button>
    );
  }
  return <button style={styles}>{props.title}</button>;
};
