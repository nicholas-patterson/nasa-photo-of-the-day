import React from "react";

const VideoDetails = props => {
  console.log(props);

  return (
    <div className="detail-styling">
      <h2>{props.details.title}</h2>
      <h3>{props.details.explanation}</h3>
      <h3>{props.details.date}</h3>
    </div>
  );
};

export default VideoDetails;
