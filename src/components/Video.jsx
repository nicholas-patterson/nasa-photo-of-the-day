import React from "react";
import ReactPlayer from "react-player";
import { Image } from "semantic-ui-react";

const Video = props => {
  console.log(props);
  // return props.data.media_type === "image" ? (
  //   <img
  //     src={props.data.url}
  //     alt={props.data.title}
  //     className="video-styling"
  //   />
  // ) : (
  //   <ReactPlayer url={props.data.url} className={"video-styling"} />
  // );

  return props.data.media_type === "image" ? (
    <Image
      src={props.data.url}
      alt={props.data.title}
      className="video-styling"
    />
  ) : (
    <ReactPlayer url={props.data.url} className={"video-styling"} />
  );
};

export default Video;
