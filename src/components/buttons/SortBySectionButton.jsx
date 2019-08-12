import React from "react";

export const SortBySectionButton = props => {
  const styles = {
    border: "none",
    borderRadius: "30px",
    padding: "15px 40px",
    marginBottom: "30px",
    backgroundColor: "#ebebeb",
    color: "#111",
    cursor: "pointer"
  };
  if (props.onClick) {
    return (
      <button onClick={props.onClick} style={styles}>
        {props.title}
      </button>
    );
  }
  return <button style={styles}>{props.title}</button>;
};
