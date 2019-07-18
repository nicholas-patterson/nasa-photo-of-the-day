import React, { useState, useEffect } from "react";
import "../../src/css/index.css";
import Header from "./Header";
import Video from "./Video";
import axios from "axios";
import VideoDetails from "./VideoDetails";
import { Card } from "semantic-ui-react";
import styled from "styled-components";

function App() {
  const [picture, setPicture] = useState([]);
  const api_key = "b5zTGWrGAYLv64Pw6us1E07Gn5XDIRbiykVhGHQl";

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`)
      .then(res => setPicture(res.data));
  }, []);

  const CardStyles = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

  return (
    <div className="App">
      <Header />
      <CardStyles>
        <Card style={{ width: "100%" }}>
          <Video data={picture} />
          <Card.Content>
            <VideoDetails details={picture} />
          </Card.Content>
        </Card>
      </CardStyles>
    </div>
  );
}

export default App;
