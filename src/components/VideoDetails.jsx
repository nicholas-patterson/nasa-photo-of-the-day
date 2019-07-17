import React from "react";

const VideoDetails = props => {
  console.log(props);
  return <h1>{props.data.title}</h1>;
};

export default VideoDetails;
