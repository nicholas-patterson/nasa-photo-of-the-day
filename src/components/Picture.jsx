import React from "react";

const Picture = props => {
  console.log(props);
  return <div>{props.data.title}</div>;
};

export default Picture;
