import React from "react";
import { Link } from "react-router-dom";
import "./FooterTopic.css";

export function FooterTopic(props) {
  const { topicPhoto, topicTitle, topicDate } = props.topic;
  return (
    <div className="topic">
      <img className="topic__content-image" src={topicPhoto} alt="" />
      <div className="topic__content">
        <span className="topic__content-title">{topicTitle}</span>
        <span>{topicDate}</span>
        <Link to={"#"} className="topic__content-link">
          Read More
        </Link>
      </div>
    </div>
  );
}
