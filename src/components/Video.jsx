import React from "react";
import ReactPlayer from "react-player";

const Video = props => {
  console.log(props);
  return (
    <>
      <ReactPlayer url={props.data.url} className={"video-styling"} />
    </>
  );
};

export default Video;
