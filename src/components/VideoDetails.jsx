import React from "react";
import { Card, Image } from "semantic-ui-react";

const VideoDetails = props => {
  // return (
  //   <div className="detail-styling">
  //     <h2>{props.details.title}</h2>
  //     <h3>{props.details.explanation}</h3>
  //     <h3>{props.details.date}</h3>
  //   </div>
  // );

  return (
    <>
      <Card.Header>{props.details.title}</Card.Header>
      <Card.Description>{props.details.explanation}</Card.Description>
      <Card.Meta>{props.details.date}</Card.Meta>
    </>
  );
};

export default VideoDetails;
