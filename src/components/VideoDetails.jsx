import React from "react";
import { Card } from "semantic-ui-react";
import styled from "styled-components";

const VideoDetails = props => {
  // return (
  //   <div className="detail-styling">
  //     <h2>{props.details.title}</h2>
  //     <h3>{props.details.explanation}</h3>
  //     <h3>{props.details.date}</h3>
  //   </div>
  // );

  const HeaderDiv = styled.div`
    color: midnightblue;
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 10px;
  `;

  const DescriptionDiv = styled.div`
    color: #333;
  `;

  return (
    <>
      <HeaderDiv>
        <Card.Header>{props.details.title}</Card.Header>
      </HeaderDiv>
      <DescriptionDiv>
        <Card.Description>{props.details.explanation}</Card.Description>
      </DescriptionDiv>
      <Card.Meta>{props.details.date}</Card.Meta>
    </>
  );
};

export default VideoDetails;
