import React from "react";
import ReactPlayer from "react-player";

const Video = props => {
  return props.data.media_type === "image" ? (
    <img src={props.data.url} />
  ) : (
    <ReactPlayer url={props.data.url} className={"video-styling"} />
  );
};

export default Video;
